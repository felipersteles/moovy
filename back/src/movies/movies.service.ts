import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async create(newMovie: MovieEntity) {
    try {
      await this.findOne(newMovie.imdbID);
    } catch (error) {
      if (error.status === 404) return this.movieRepository.save(newMovie);
      else throw new BadRequestException();
    }
  }

  findAll(): Promise<MovieEntity[]> {
    return this.movieRepository.find();
  }

  async findOne(imdbID: string): Promise<MovieEntity> {
    const movie = await this.movieRepository.findOneBy({ imdbID });

    if (movie) return movie;
    else throw new NotFoundException();
  }

  async remove(id: string): Promise<void> {
    await this.movieRepository.delete(id);
  }
}
