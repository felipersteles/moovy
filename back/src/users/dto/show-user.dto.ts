import { MovieReviewDto } from "src/movie_review/dto/movie_review.dto";

export class ShowUserDto {
    id: string;
    username: string;
    movieReviews: MovieReviewDto[];
}
