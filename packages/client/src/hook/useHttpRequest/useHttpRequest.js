import { useEffect, useState } from 'react';

const usuallyRequest = (method, url, body, headers) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    headers
      ? xhr.setRequestHeader(headers[0], headers[1])
      : xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.onload = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        if (xhr.response) {
          resolve(JSON.parse(xhr.response));
        }
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.send(JSON.stringify(body));
  });

const useHttpRequest = () => {
  const [responsetData, setResponsetData] = useState({ data: null, error: '' });
  const [requestState, setRequestState] = useState({
    method: '',
    url: '',
    body: '',
    headers: '',
  });

  useEffect(() => {
    if (
      requestState.method &&
      requestState.url
      // ||
      // (requestState.method && requestState.url && requestState.headers) ||
      // (requestState.method && requestState.url && requestState.body)
    ) {
      usuallyRequest(requestState.method, requestState.url, requestState.body, requestState.headers)
        .then((result) => {
          setResponsetData({ ...responsetData, data: result });
        })
        .catch((err) => {
          setResponsetData({ ...responsetData, error: err.massage });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestState]);

  const httpRequest = (method, url, body, headers) => {
    setRequestState({ method, url, body, headers });
  };

  return { responsetData, httpRequest };
};

export default useHttpRequest;
