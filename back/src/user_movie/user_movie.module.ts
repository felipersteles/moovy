import { Module } from '@nestjs/common';
import { UserMovieService } from './user_movie.service';
import { UserMovieController } from './user_movie.controller';
import { UserMovie } from './entities/user_movie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMovieRepository } from './user_movie.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserMovie, UserMovieRepository])],
  controllers: [UserMovieController],
  providers: [UserMovieService, UserMovieRepository],
  exports: [UserMovieService],
})
export class UserMovieModule {}
