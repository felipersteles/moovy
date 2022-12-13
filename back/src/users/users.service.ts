import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as md5 from 'md5';
import { ForbiddenException } from '@nestjs/common/exceptions';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(newUser: User) {
    newUser.password = md5(newUser.password);
    const sameUsers = await this.findOneByUsername(newUser.username);
    console.log(newUser);

    // so podem se cadastrar usuarios novos
    if (sameUsers === null) return this.usersRepository.save(newUser);
    else throw new ForbiddenException();
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOneWithRelation(id: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        id,
      },
      relations: ['movieReviews', 'movieReviews.movie'],
    });
  }

  findOneByEmail(email: string): Promise<User> {
    return this.usersRepository.findOneBy({ email });
  }

  findOneByUsername(username: string): Promise<User> {
    return this.usersRepository.findOneBy({ username });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
