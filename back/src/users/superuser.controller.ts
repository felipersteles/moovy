import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Controller('admin')
export class SuperUserController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('admin'))
  @Post('/login')
  login(@Body() loginUserDto: LoginUserDto) {
      console.log(loginUserDto);
      return this.authService.loginAdmin(loginUserDto)
  }
}
