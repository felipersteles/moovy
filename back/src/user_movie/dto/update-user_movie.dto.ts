import { PartialType } from '@nestjs/mapped-types';
import { CreateUserMovieDto } from './create-user_movie.dto';

export class UpdateUserMovieDto extends PartialType(CreateUserMovieDto) {}
