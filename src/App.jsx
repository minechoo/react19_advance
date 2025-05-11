import { useContext } from "react";
import { Route, Routes} from "react-router-dom"
import ToggleTheme from "./components/ToggleTheme";
import MovieDetail from "./Pages/MovieDetail";
import MovieList from "./Pages/MovieList";
import { ThemeContext } from "./ThemeProvider";


function App() {
  const {GlobalState} = useContext(ThemeContext)

  const styleLight = {
    backgroundColor: "white",
    color: "black",
  };

  const styleDark = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <>
      <main style={GlobalState.isLight ? styleLight : styleDark}>
        <ToggleTheme />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/detail/:id" element={<MovieDetail />} />
        </Routes>
      </main>
    </>
  )
}

export default App
