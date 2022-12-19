import { Multer } from "multer";
import { Express } from "express";
import { UserEntity } from "src/users/entities/user.entity";
import { MovieEntity } from "src/movies/entities/movie.entity";

export class CreateMovieReviewDto { 
    user: UserEntity;
    movie: MovieEntity;
    rating: number;
    audioReview: Express.Multer.File
}



