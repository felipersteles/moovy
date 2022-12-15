import axios from "axios";

export default class SearchMovieService {
  private axios;

  constructor() {
    this.axios = axios.create({
      baseURL: "http://www.omdbapi.com/?t=no+country",
    });
  }

  get(searchTerm: string) {
    return this.axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=4349748`);
  }
}
