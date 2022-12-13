/* eslint-disable prettier/prettier */

import { MovieReviewDto } from "src/movie_review/dto/movie_review.dto";

export class UserShowDto {
    id: string;
    username: string;
    movieReviews: MovieReviewDto;
}
