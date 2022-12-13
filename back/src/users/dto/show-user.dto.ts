import { MovieReviewDto } from "src/movie-review/dto/movie-review.dto";

export class ShowUserDto {
    id: string;
    username: string;
    movieReviews: MovieReviewDto[];
}
