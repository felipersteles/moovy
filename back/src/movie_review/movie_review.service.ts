import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieReview } from './entities/movie_review.entity';
import { MovieReviewRepository } from './movie_review.repository';

@Injectable()
export class MovieReviewService {
  constructor(
    @InjectRepository(MovieReview)
    private movieReviewRepository: MovieReviewRepository,
  ) {}

  create(newMovieReview: MovieReview) {
    return this.movieReviewRepository.save(newMovieReview);
  }

  findAll(): Promise<MovieReview[]> {
    return this.movieReviewRepository.find();
  }
}
