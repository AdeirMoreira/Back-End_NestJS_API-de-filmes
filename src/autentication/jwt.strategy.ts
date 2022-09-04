import { Injectable, NotFoundException, UnauthorizedException, ValidationPipe } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "src/user/user.service";



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private userService:UserService) {
        super({
          jwtFromRequest: ExtractJwt.fromHeader('authorization'),
          ignoreExpiration: false,
          secretOrKey: 'segredo',
        });
      }
    
      async validate(payload: any) {
        const user = await this.userService.findOnebyEmail(payload.email)
        if (!user || user.email !== payload.email) {
          throw new NotFoundException({message: "Usuário não encontrado!"});
        }
        const {password , ...result} = user
        return result
      }
}