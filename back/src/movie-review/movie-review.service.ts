import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieReviewEntity } from './entities/movie-review.entity';
import { MovieReviewRepository } from './movie-review.repository';

@Injectable()
export class MovieReviewService {
  constructor(
    @InjectRepository(MovieReviewEntity)
    private movieReviewRepository: MovieReviewRepository,
  ) {}

  create(newMovieReview: MovieReviewEntity) {
    console.log(newMovieReview);
    return this.movieReviewRepository.save(newMovieReview);
  }

  findAll(): Promise<MovieReviewEntity[]> {
    return this.movieReviewRepository.find();
  }
}
