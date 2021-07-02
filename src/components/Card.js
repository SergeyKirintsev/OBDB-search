import styles from './Card.module.css';

function Card({film, handleShowMore}) {
  return (
    <li>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={film.Poster} alt="" className={styles.img}/>
        </div>
        <div className={styles.title}>
          {film.Title}
        </div>
        <p onClick={() => handleShowMore(film)} className={styles.moreInfo}>Больше информации...</p>
      </div>
    </li>
  )
}

export default Card;