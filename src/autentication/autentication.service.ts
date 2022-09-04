import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashManagerService } from 'src/hash-manager/hash-manager.service';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AutenticationService {
    constructor(
      private usersService: UserService,
      private hashManagerService: HashManagerService,
      private jwtService: JwtService
      ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOnebyEmail(email);
    if (user && this.hashManagerService.compare(pass,user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {username: user.username, email: user.email, sub: user.id };
    return {
      token: this.jwtService.sign(payload,
        {secret: 'segredo', expiresIn: '5h' }
        ),
    };
  }
}