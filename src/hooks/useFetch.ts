
import { useState, useEffect } from 'react';

const checkResponse = (res: any) => {
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
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    setLoading(true);
    fetch(config.baseUrl, {
      headers: config.headers,
    })
      .then(checkResponse)
      .then((data: any) => {
        setLoading(false)
        setData(data.data)
      }
      )
      .catch((err: any) => {
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