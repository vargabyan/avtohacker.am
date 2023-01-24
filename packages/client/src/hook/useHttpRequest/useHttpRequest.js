import { useEffect, useState } from 'react';

const usuallyRequest = (method, url, body) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.send(JSON.stringify(body));
  });

const useHttpRequest = (method, url, body) => {
  const [responsetData, setResponsetData] = useState({ data: [], error: '' });

  useEffect(() => {
    if (method || url || body) {
      usuallyRequest(method, url, body)
        .then((result) => {
          setResponsetData({ ...responsetData, data: result });
        })
        .catch((err) => {
          setResponsetData({ ...responsetData, error: err.massage });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, url, body]);

  return { usuallyRequest, responsetData };
};

export default useHttpRequest;
