import axios from "axios";
import { useState, useEffect } from "react";




export  function useFetch<T = unknown>(url:string) {
  const [data, setdata] = useState<T | null>(null)
  const [livros, setLivros] = useState(true)

  useEffect(()=> {
    axios.get(url)
    .then(response => {
      setdata(response.data)
    })
  },[])
return {data}
};
