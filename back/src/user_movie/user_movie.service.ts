import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserMovieDto } from './dto/update-user_movie.dto';
import { UserMovie } from './entities/user_movie.entity';
import { UserMovieRepository } from './user_movie.repository';

@Injectable()
export class UserMovieService {
  constructor(private usersMovieRepository: UserMovieRepository) {}

  create(newUserMovie: UserMovie) {
    console.log(newUserMovie);
    return this.usersMovieRepository.save(newUserMovie);
  }

  async findAll(): Promise<UserMovie[]> {
    const result = await this.usersMovieRepository.find();
    result.forEach((res) => {
      console.log(res.user);
    });
    return result;
  }

  findByUser(user: string) {
    // console.log(user);
    console.log(this.usersMovieRepository.findByUser(user));
  }

  findOne(id: string) {
    return `This action returns a #${id} userMovie`;
  }

  // update(id: string, updateUserMovieDto: UpdateUserMovieDto) {
  //   return `This action updates a #${id} userMovie`;
  // }

  remove(id: string) {
    return `This action removes a #${id} userMovie`;
  }
}
