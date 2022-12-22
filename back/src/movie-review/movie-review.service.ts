import { Injectable, StreamableFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createReadStream } from 'fs';
import { join } from 'path';
import { MovieReviewEntity } from './entities/movie-review.entity';
import { MovieReviewRepository } from './movie-review.repository';

@Injectable()
export class MovieReviewService {
  constructor(
    @InjectRepository(MovieReviewEntity)
    private movieReviewRepository: MovieReviewRepository,
  ) {}

  create(newMovieReview: MovieReviewEntity) {
    // fazer o audio como caminho para o banco de dados
    return this.movieReviewRepository.save(newMovieReview);
  }

  findAll(): Promise<MovieReviewEntity[]> {
    return this.movieReviewRepository.find();
  }

  findOne(id: string): Promise<MovieReviewEntity>{
    return this.movieReviewRepository.findOneBy({id})
  }
}
