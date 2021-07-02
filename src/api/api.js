import {convertSearchString} from "../utils/utils";

export class Api {
  static getMovies(searchString) {
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=b838ece8';
    const search = convertSearchString(searchString)

    return fetch(`${url}&s=${search}`).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
  }
}