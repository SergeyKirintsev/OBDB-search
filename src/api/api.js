import {convertSearchString} from "../utils/utils";

export class Api {
  static url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

  static checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  static getMovies(searchString) {
    const search = convertSearchString(searchString)

    return fetch(`${this.url}&s=${search}`).then(this.checkResponse)
  }

  static getInfoByID(id) {
    return fetch(`${this.url}&i=${id}&plot=full`).then(this.checkResponse)
  }
}