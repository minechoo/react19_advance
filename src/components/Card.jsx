export default function Card({data}) {
  return (
    <article>
      <a href="">
        <img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} />
      </a>
      <h2>
        <a href="/">
          {data.title}
        </a>
      </h2>
    </article>
  )
}

