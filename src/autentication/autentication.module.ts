import { Module, forwardRef } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { HashManagerService } from 'src/hash-manager/hash-manager.service';
import { UserModule } from 'src/user/user.module';
import { AutenticationService } from './autentication.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
    imports:[
      JwtModule,
        forwardRef (() => UserModule),
        PassportModule, 
      ],
      providers: [AutenticationService, LocalStrategy, JwtStrategy, HashManagerService],
      exports: [AutenticationService]
})
export class AutenticationModule {}
