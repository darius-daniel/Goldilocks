import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react"

export default function useFetch(url: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response: AxiosResponse) => {
      setData(response.data);
    }).catch((error: Error) => {
      console.log(`Error: ${error.message}`);
    })
  }, []);

  return data;
}