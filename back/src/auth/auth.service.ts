import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as md5 from 'md5';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user && user.password === md5(pass)) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async validateSuperUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user.superuser === true) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(loginUserDto: LoginUserDto) {
    // console.log(user)
    const user = await this.usersService.findOneByUsername(
      loginUserDto.username,
    );
    const payload = { username: user.username, sub: user.id };
    return {
      username: user.username,
      access_token: this.jwtService.sign(payload),
    };
  }

  async loginAdmin(loginUserDto: LoginUserDto) {
    // console.log(user)
    const user = await this.usersService.findOneByUsername(
      loginUserDto.username,
    );
    const payload = { username: user.username, sub: user.id };

    if (user.superuser === true)
      return {
        username: user.username,
        superuser: true,
        access_token: this.jwtService.sign(payload),
      };
  }
}
