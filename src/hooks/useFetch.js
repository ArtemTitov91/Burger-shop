
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

const useFetch = (url,
  dispatch,
  success,
  failed,
  request,
  method,
  body = null,
) => {

  dispatch({
    type: request
  });
  fetch(url, {
    method: method,
    headers: config.headers,
    body: body
  })
    .then(checkResponse)
    .then((data) => {
      dispatch({
        type: success,
        order: data.order,
        data: data.data,
      });
    }
    )
    .catch((err) => {
      dispatch({
        type: failed
      });
    }
    );
};


export default useFetch

export {
  checkResponse,
  config
}