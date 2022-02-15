
import { useState, useEffect } from 'react';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

const config = {
  baseUrl: "https://norma.nomoreparties.space/api/",
  headers: {
    "Content-Type": "application/json",
  },
};

const useFetch = ( url, order,
  {
    method,
    headers = config.headers,
    body = null
  }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [res, setRes] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: method,
      headers: headers,
      body: body
    })
      .then(checkResponse)
      .then((data) => {
        setLoading(false)
        setData(data.data)
        setRes(data.order)
      }
      )
      .catch((err) => {
        setLoading(false)
        setError(error)
      }
      );
  }, [order]);



  return {
    loading, error, data, res
  }
}

export default useFetch

export {
  checkResponse,
  config 
}