/* eslint-disable prettier/prettier */
import { Movie } from 'src/movies/entities/movie.entity';

export class MovieReviewDto {
  movie: Movie; // mudar para movie-dto
  rating: number;
  audio_review: string;
}
