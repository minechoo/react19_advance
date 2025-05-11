import { Link } from "react-router-dom";

export default function Card({data}) {
  return (
    <article>
      <Link to={"/detail/" + data.id}>
        <img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} />
      </Link>
      <h2>
        <Link to={"/detail/" + data.id }>
          {data.title}
        </Link>
      </h2>
    </article>
  )
}

