import './App.css';
import SearchPanel from "./SearchPanel";
import FilmList from "./FilmList";
import {Api} from "../api/api";
import {useState} from "react";
import Spinner from "./Spinner";
import FilmPopup from "./FilmPopup";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isShowInfoWindow, setIsShowInfoWindow] = useState(false);

  function getMovies(movie, input) {
    setIsLoading(true);
    Api.getMovies(movie)
      .then((movies) => {
        setMovies(movies);
        setIsLoading(false);
        input.current.value = '';
      })
      .catch(err => console.log('getMovies', err));
  }

  function handleShowMore(film) {
    Api.getInfoByID(film.imdbID)
      .then((info) => {
        setMovieInfo(info);
        setIsShowInfoWindow(true);
      })
      .catch(err => console.log('handleShowMore', err));
  }

  function closePopup(e) {
    if (e.key === 'Escape' || e.currentTarget === e.target) {
      setIsShowInfoWindow(false);
    }
  }

  function closePopupBtn() {
    setIsShowInfoWindow(false);
  }

  return (
    <div className="App">
      <SearchPanel getMovies={getMovies}/>

      {isLoading ? <Spinner/> : <FilmList movies={movies} handleShowMore={handleShowMore}/>}

      {(movies.Response === 'False') && (<div>Ничего не найдено</div>)}

      {isShowInfoWindow &&
          <FilmPopup
            movieInfo={movieInfo}
            closePopup={closePopup}
            closePopupBtn={closePopupBtn}
          />}
    </div>
  );
}

export default App;
