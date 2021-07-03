import styles from "./FilmPopup.module.css";
import {useEffect} from "react";

function FilmPopup({movieInfo, closePopup, closePopupBtn}) {
  useEffect(() => {
    document.addEventListener('keydown', closePopup);
    return () => document.removeEventListener('keydown', closePopup);
  }, [closePopup]);

  return (
    <div className={styles.popup} onClick={closePopup}>
      <div className={styles.container}>
        <button onClick={closePopupBtn} type="button" className={styles.closeBtn}/>
        <div className={styles.poster}>
          <img className={styles.img} src={movieInfo.Poster} alt=""/>
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{movieInfo.Title} ({movieInfo.Year})</h2>
          <h3>О фильме</h3>
          <p>Сюжет: {movieInfo.Plot}</p>
        </div>
      </div>
    </div>
  )
}

export default FilmPopup;