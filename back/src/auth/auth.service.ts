import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as md5 from 'md5';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && user.password === md5(pass)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      email: payload.email,
      access_token: this.jwtService.sign(payload),
    };
  }
}
