import { Route, Routes} from "react-router-dom"
import MovieDetail from "./Pages/MovieDetail";
import MovieList from "./Pages/MovieList";


function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/detail/:id" element={<MovieDetail />} />
    </Routes>
    </>
  )
}

export default App
