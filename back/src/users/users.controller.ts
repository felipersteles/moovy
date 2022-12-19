import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UserMapper } from './user.mapper';
import { ShortUserDto } from './dto/short-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService
  ) {}

  // metodo de cadastro é um post
  // so podem ser cadastrados usuarios novos
  // isto é, que ainda não possuem username
  // cadastrado no banco de dados
  @Post('cadastro')
  cadastro(@Body() createUserDto: CreateUserDto) {
    const newUser = UserMapper.fromDTOtoEntity(createUserDto);
    return this.usersService.create(newUser);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':username')
  async findOne(@Param('username') username: string): Promise<ShortUserDto> {
    const user = await this.usersService.findOneByUsername(username)
    return UserMapper.fromEntityToShortDTO(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const user = await this.usersService.findOneWithRelation(req.user.id);
    return UserMapper.fromEntityToShowDTO(user);
  }
}
