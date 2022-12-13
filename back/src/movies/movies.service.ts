import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieEntity } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MovieEntity)
    private movieRepository: Repository<MovieEntity>,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    return this.movieRepository.save(createMovieDto);
  }

  findAll(): Promise<MovieEntity[]> {
    return this.movieRepository.find();
  }

  findOne(id: string): Promise<MovieEntity> {
    return this.movieRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.movieRepository.delete(id);
  }
}
