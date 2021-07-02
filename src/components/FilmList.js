import Card from "./Card";
import styles from './FilmList.module.css'

function FilmList({movies, handleShowMore}) {

  const listFilms = movies?.Search?.map(film => (
    <Card
      key={film.imdbID}
      film={film}
      handleShowMore={handleShowMore}
    />
  ))

  return (
    <div>
      <ul className={styles.filmList}>
        {listFilms}
      </ul>
    </div>
  );
}

export default FilmList;