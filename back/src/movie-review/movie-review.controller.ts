/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Header, Param, Post, Res, StreamableFile, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { AudioDTO } from './dto/audio.dto';
import { CreateMovieReviewDto } from './dto/create-movie-review.dto';
import { MovieReviewMapper } from './movie-review.mapper';
import { MovieReviewService } from './movie-review.service';

@Controller('moviereview')
export class MovieReviewsController {
  constructor(private readonly movieReviewService: MovieReviewService) {}

  @Post()
  @UseInterceptors(FileInterceptor('audioReview'))
  create(@Body() createMovieReviewDto: CreateMovieReviewDto, @UploadedFile() file: Express.Multer.File) {
    createMovieReviewDto.audio = file.filename
    const newMovieReview = MovieReviewMapper.fromDTOtoEntity(createMovieReviewDto)

    if(newMovieReview) return this.movieReviewService.create(newMovieReview);
    else throw new BadRequestException()
  }

  @Get()
  findAll() {
    return this.movieReviewService.findAll();
  }

  @Get(':movieReviewId')
  @Header('Content-Type', 'audio/mpeg')
  @Header('Content-Disposition', 'attachment; filename="som.mp3"')
  async getFile(@Param('movieReviewId') audioName: string) {
    
    const file = createReadStream(join(process.cwd(),`uploads/${audioName}.mp3`));
    return new StreamableFile(file);
  }
}
