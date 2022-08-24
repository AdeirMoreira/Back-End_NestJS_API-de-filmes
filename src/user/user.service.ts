import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AutenticationService } from 'src/autentication/autentication.service';
import { HashManagerService } from 'src/hash-manager/hash-manager.service';
import { UuidService } from 'src/uuid/uuid.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly authentication: AutenticationService,
    private readonly uuid: UuidService,
    private readonly hashManager: HashManagerService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    createUserDto.id = this.uuid.generate();
    const hashPassword = this.hashManager.hash(createUserDto.password);
    createUserDto.password = hashPassword;
    await this.userRepository.save(createUserDto);
    const token = this.authentication.generateToken({ id: createUserDto.id });
    return { token, createUserDto };
  }

  async login(loginDto: LoginDto) {
    const user = await this.findOnebyEmail(loginDto.email);
    if (!user || !this.hashManager.compare(loginDto.password, user.password)) {
      throw new HttpException(
        'Email ou senha incorretos',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const token = this.authentication.generateToken({ id: user.id });
    return { token };
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOnebyEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
