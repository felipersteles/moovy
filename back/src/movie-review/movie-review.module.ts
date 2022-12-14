import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieReviewEntity } from './entities/movie-review.entity';
import { MovieReviewsController } from './movie-review.controller';
import { MovieReviewRepository } from './movie-review.repository';
import { MovieReviewService } from './movie-review.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MovieReviewRepository, MovieReviewEntity]),
    MulterModule.register({
      dest: './uploads'
    }),
  ],
  controllers: [MovieReviewsController],
  providers: [MovieReviewService],
  exports: [MovieReviewService]
})
export class MovieReviewModule {}
