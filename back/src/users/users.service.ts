import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import * as md5 from 'md5';
import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { UserMapper } from './user.mapper';
import { ShowUserDto } from './dto/show-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(newUser: UserEntity) {
    newUser.password = md5(newUser.password);
    try {
      await this.findOneByUsername(newUser.username);
    } catch (error) {
      if(error.status === 404) return this.usersRepository.save(newUser);
    }
    
    // so podem se cadastrar usuarios novos
    throw new ForbiddenException();
  }

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async findOneWithRelation(id: string): Promise<UserEntity> {
    const user = await this.usersRepository.findOne({
      where: {
        id,
      },
      relations: ['movieReviews', 'movieReviews.movie'],
    });

    if (user) return user;
    else throw new BadRequestException();
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({ email });

    if (user) return user;
    else throw new NotFoundException();
  }

  async findOneByUsername(username: string): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({ username });

    if (user) return user;
    else throw new NotFoundException();
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
