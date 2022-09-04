import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AutenticationService } from 'src/autentication/autentication.service';
import { HashManagerService } from 'src/hash-manager/hash-manager.service';
import { UuidService } from 'src/uuid/uuid.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly uuid: UuidService,
    private readonly hashManager: HashManagerService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    createUserDto.id = this.uuid.generate();
    const hashPassword = this.hashManager.hash(createUserDto.password);
    createUserDto.password = hashPassword;
    await this.userRepository.save(createUserDto);
    const { password, ...user} = createUserDto
    return { user };
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOnebyEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOneBy({ id }); 
    if (!user) {
      throw new NotFoundException({message: "Usuário não encontrado!"});
    }
    const {password, ...result} = user
    return result
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.userRepository.delete(id);
  }
}
