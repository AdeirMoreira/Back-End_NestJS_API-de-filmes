import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UuidService } from 'src/uuid/uuid.service';
import { AutenticationService } from 'src/autentication/autentication.service';
import { HashManagerService } from 'src/hash-manager/hash-manager.service';
import { AutenticationModule } from 'src/autentication/autentication.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [AutenticationModule, TypeOrmModule.forFeature([User]), ],
  controllers: [UserController],
  providers: [UserService, UuidService, HashManagerService, JwtService],
  exports: [UserService]
})
export class UserModule {}
