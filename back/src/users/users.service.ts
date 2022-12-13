import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import * as md5 from 'md5';
import { ForbiddenException } from '@nestjs/common/exceptions';
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
    const sameUsers = await this.findOneByUsername(newUser.username);
    // console.log(newUser);

    // so podem se cadastrar usuarios novos
    if (sameUsers === null) return this.usersRepository.save(newUser);
    else throw new ForbiddenException();
  }

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async findOneWithRelation(id: string): Promise<ShowUserDto> {
    const user = await this.usersRepository.findOne({
      where: {
        id,
      },
      relations: ['movieReviews', 'movieReviews.movie'],
    });

    return UserMapper.fromEntityToShowDTO(user);
  }

  findOneByEmail(email: string): Promise<UserEntity> {
    return this.usersRepository.findOneBy({ email });
  }

  findOneByUsername(username: string): Promise<UserEntity> {
    return this.usersRepository.findOneBy({ username });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
