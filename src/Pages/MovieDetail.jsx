import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  //console.log(id)
  const [MovieDetail, setMovieDetail] = useState(null)

  const BASE_URL = "https://api.themoviedb.org/3/movie";
  const API_KEY = "ab9b6a7b403af65679b0659d8ede19bc";
  const REQ_URL = `${BASE_URL}/${id}?api_key=${API_KEY}&language=ko-KR`;

  useEffect(()=>{
    const fetchMovieById =  async () => {
      const response = await fetch(REQ_URL)
      const data = await response.json()
      console.log(data)
      setMovieDetail(data)
    }
    fetchMovieById()
  },[])
  return (
    <section>
      <h1>{MovieDetail?.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${MovieDetail?.backdrop_path}`}
      />
      <p>{MovieDetail?.overview}</p>
      <button onClick={() => navigate(-1)}>이전목록</button>
    </section>
  )
}



