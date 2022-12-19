import { MovieReviewType } from "../types/MovieReviewType";
import HttpService from "./HttpService";

export default class MovieReviewService extends HttpService {
  async create(movieReview: MovieReviewType) {
    const username = localStorage.getItem("username");
    const userData = await this.get(`users/${username}`);
    const movieData = await this.get(`movies/${movieReview.movieID}`);

    // baseado na DTO
    const newMovieReview = new FormData();
    newMovieReview.append("user", userData.data.id);
    newMovieReview.append("movie", movieData.data.id);
    newMovieReview.append("rating", movieReview.rating);
    newMovieReview.append("audioReview", movieReview.audioReview);

    return this.postForm("moviereview", newMovieReview);
  }
}
