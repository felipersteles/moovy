import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserMovieService } from './user_movie.service';
import { UpdateUserMovieDto } from './dto/update-user_movie.dto';
import { UserMovie } from './entities/user_movie.entity';

@Controller('user-movie')
export class UserMovieController {
  constructor(private readonly userMovieService: UserMovieService) {}

  @Post()
  create(@Body() createUserMovieDto: UserMovie) {
    return this.userMovieService.create(createUserMovieDto);
  }

  @Get()
  findAll() {
    return this.userMovieService.findAll();
  }

  @Get(':user')
  findByUser(@Param('user') userId: string) {
    return this.userMovieService.findByUser(userId);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateUserMovieDto: UpdateUserMovieDto,
  // ) {
  //   return this.userMovieService.update(id, updateUserMovieDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userMovieService.remove(id);
  }
}
