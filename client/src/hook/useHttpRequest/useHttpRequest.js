import { useEffect, useState } from "react";

const useHttpRequest = (method, url, body) => {
  const [responsetData, setResponsetData] = useState({data: [], error: ""})
  
  const usuallyRequest = (method, url, body) => {
    return new Promise ((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      xhr.open(method, url)
      xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
      xhr.onload = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
          resolve(xhr.response)
        } else {
          reject(xhr.statusText)
        }
      }
      xhr.send(JSON.stringify(body))
    })
  }

  useEffect(() => {
    if (method || url || body) {

      usuallyRequest(method, url, body)
      .then((result) => {
        setResponsetData({...responsetData, data: result})
      })
      .catch((err) => {
        setResponsetData({...responsetData, error: err.massage})
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, url, body])

  return { usuallyRequest, responsetData }
}

export default useHttpRequest