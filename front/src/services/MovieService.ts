import { MovieType } from "../types/MovieType";
import HttpService from "./HttpService";

export default class MovieService extends HttpService { 
    create(data: MovieType) {
        return this.post('movies', data)
    }
}