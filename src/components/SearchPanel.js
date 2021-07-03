import styles from './SearchPanel.module.css';
import {useRef} from "react";

function SearchPanel({getMovies}) {
  const input = useRef(null);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    getMovies(input.current.value, input);
  }

  return (
    <div className={styles.panel}>
      <form onSubmit={handleSubmit}>
        <input
          ref={input}
          className={styles.panel__input}
          type="text"
          name="input"
          placeholder="Введите название фильма"
          required
          aria-label="Введите название фильма"
        />
        <button className={styles.panel__btn} type="submit">Найти</button>
      </form>
    </div>
  );
}

export default SearchPanel;