/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovieReview } from './entities/movie_review.entity';
import { MovieReviewService } from './movie_review.service';

@Controller('moviereview')
export class MovieReviewsController {
  constructor(private readonly movieReviewService: MovieReviewService) {}

  @Post()
  create(@Body() createMovieReview: MovieReview) {
    return this.movieReviewService.create(createMovieReview);
  }

  @Get()
  findAll() {
    return this.movieReviewService.findAll();
  }
}
