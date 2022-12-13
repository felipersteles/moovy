
import { ShowMovieDto } from 'src/movies/dto/show-movie.dto';

export class MovieReviewDto {
  movie: ShowMovieDto;
  rating: number;
  audioReview: string;
}
