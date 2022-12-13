/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovieReviewEntity } from './entities/movie_review.entity';
import { MovieReviewService } from './movie_review.service';

@Controller('moviereview')
export class MovieReviewsController {
  constructor(private readonly movieReviewService: MovieReviewService) {}

  @Post()
  create(@Body() createMovieReview: MovieReviewEntity) {
    return this.movieReviewService.create(createMovieReview);
  }

  @Get()
  findAll() {
    return this.movieReviewService.findAll();
  }
}
