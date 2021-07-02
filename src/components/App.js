import './App.css';
import SearchPanel from "./SearchPanel";
import FilmList from "./FilmList";
import {Api} from "../api/api";

function App() {
  function getMovies(movie) {
    Api.getMovies(movie);
  }

  return (
    <div className="App">
      <SearchPanel getMovies={getMovies} />
      <FilmList/>
    </div>
  );
}

export default App;
