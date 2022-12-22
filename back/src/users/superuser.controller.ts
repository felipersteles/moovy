import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { CreateInvitedDto } from './dto/create-invited.dto';
import { UsersService } from './users.service';
import { InvitedMapper } from './mappers/invited.mapper';

@Controller('admin')
export class SuperUserController {
  constructor(
    private readonly userService: UsersService,
    private authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('admin'))
  @Post('/login')
  login(@Body() loginUserDto: LoginUserDto) {
    console.log(loginUserDto);
    return this.authService.loginAdmin(loginUserDto);
  }

  @Post('/users')
  createInvited(@Body() createInvitedDto: CreateInvitedDto) {
    const newUser = InvitedMapper.fromDTOtoEntity(createInvitedDto);
    return this.userService.invite(newUser);
  }
}
