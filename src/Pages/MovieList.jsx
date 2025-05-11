import { useEffect, useState } from 'react'
import Card from '../components/Card';

export default function MovieList() {

  const [MovieData, setMovieData] = useState([])

  const BASE_URL = "https://api.themoviedb.org/3/movie/popular";
  const API_KEY = "ab9b6a7b403af65679b0659d8ede19bc";
  const REQ_URL = `${BASE_URL}?api_key=${API_KEY}&language=ko-KR`;

  useEffect(()=>{
    const fetchMovieData =  async () =>{
      const response = await fetch(REQ_URL)
      const data = await response.json()
      console.log(data.results)
      setMovieData(data.results)
    }

    fetchMovieData()
  },[])

  return (
    <>
    {MovieData.map((data)=>{
      return <Card key={data.id} data={data} />
    })}
    </>
  )
}
