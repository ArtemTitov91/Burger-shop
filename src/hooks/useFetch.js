
import { useState, useEffect } from 'react';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

const config = {
  baseUrl: "https://norma.nomoreparties.space/api/ingredients",
  headers: {
    "Content-Type": "application/json",
  },
};

const useFetch = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(config.baseUrl, {
      headers: config.headers,
    })
      .then(checkResponse)
      .then((data) => {
        setLoading(false)
        setData(data.data)
      }
      )
      .catch((err) => {
        setLoading(false)
        setError(error)
      }
      );
  }, []);



  return {
    loading, error, data
  }
}

export default useFetch