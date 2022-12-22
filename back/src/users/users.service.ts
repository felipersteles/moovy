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
import { UserMapper } from './mappers/user.mapper';
import { ShowUserDto } from './dto/show-user.dto';
import { InvitedEntity } from './entities/invited.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(InvitedEntity)
    private invitedRepository: Repository<InvitedEntity>,
  ) {}

  async create(newUser: UserEntity) {
    newUser.password = md5(newUser.password);
    const sameUsers = await this.findOneByUsername(newUser.username);
    if (!sameUsers) return this.usersRepository.save(newUser);
    else throw new ForbiddenException()
  }

  async invite(newInvited: InvitedEntity) {
    const sameUsers = await this.invitedRepository.findOne({
      where: {
        email: newInvited.email,
      },
    });

    if (!sameUsers) return this.invitedRepository.save(newInvited);
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
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({ email });

    if (user) return user;
  }

  async findOneByUsername(username: string): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({ username });

    if (user) return user;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
