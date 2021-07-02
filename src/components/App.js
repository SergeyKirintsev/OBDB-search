import './App.css';
import SearchPanel from "./SearchPanel";
import FilmList from "./FilmList";
import {Api} from "../api/api";
import {useState} from "react";
import Spinner from "./Spinner";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function getMovies(movie) {
    setIsLoading(true);
    Api.getMovies(movie)
      .then((movies) => {
        setMovies(movies);
        setIsLoading(false);
      })
      .catch(err => console.log('getMovies', err));
  }

  function handleShowMore(film) {
    console.log('handleShowMore');
    console.log(film);
  }

  return (
    <div className="App">
      <SearchPanel getMovies={getMovies} />
      {isLoading ? <Spinner/> : <FilmList movies={movies} handleShowMore={handleShowMore}/>}
    </div>
  );
}

export default App;
