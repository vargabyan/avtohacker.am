import { useEffect, useState } from 'react';

const usuallyRequest = async (method, url, body, headers) => {
  const hasHeader = headers || { 'Content-type': 'application/json; charset=utf-8' };

  return fetch(url, {
    method,
    headers: hasHeader,
    body,
  });
};

const useHttpRequest = () => {
  const [responsetData, setResponsetData] = useState({ data: null, error: '' });
  const [requestState, setRequestState] = useState({
    method: '',
    url: '',
    body: '',
    headers: '',
  });

  useEffect(() => {
    if (requestState.method && requestState.url) {
      usuallyRequest(requestState.method, requestState.url, requestState.body, requestState.headers)
        .then((response) => response.json())
        .then((response) => {
          setResponsetData({ ...responsetData, data: response });
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error('🚀 ~ file: useHttpRequest.js:36 err:', err);
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
