import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieReview } from './entities/movie_review.entity';
import { MovieReviewsController } from './movie_review.controller';
import { MovieReviewRepository } from './movie_review.repository';
import { MovieReviewService } from './movie_review.service';

@Module({
  imports: [TypeOrmModule.forFeature([MovieReviewRepository, MovieReview])],
  controllers: [MovieReviewsController],
  providers: [MovieReviewService],
})
export class MovieReviewModule {}
