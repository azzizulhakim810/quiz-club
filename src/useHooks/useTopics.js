import { useEffect, useState } from "react"

const useTopics = () => {
  const[topics, setTopics] = useState([]);

  useEffect(() => {
    const url = `https://openapi.programming-hero.com/api/quiz`;
    fetch(url)
    .then(res=> res.json())
    .then(data=>setTopics(data.data))
  },[])
  return[topics,setTopics];
}

export default useTopics;