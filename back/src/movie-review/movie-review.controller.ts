/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateMovieReviewDto } from './dto/create-movie-review.dto';
import { MovieReviewMapper } from './movie-review.mapper';
import { MovieReviewService } from './movie-review.service';

@Controller('moviereview')
export class MovieReviewsController {
  constructor(private readonly movieReviewService: MovieReviewService) {}

  @Post()
  @UseInterceptors(FileInterceptor('audioReview'))
  create(@Body() createMovieReviewDto: CreateMovieReviewDto, @UploadedFile() file: Express.Multer.File) {
    console.log(file);

    const newMovieReview = MovieReviewMapper.fromDTOtoEntity(createMovieReviewDto)

    if(newMovieReview) return this.movieReviewService.create(newMovieReview);
    else throw new BadRequestException()
  }

  @Get()
  findAll() {
    return this.movieReviewService.findAll();
  }
}
