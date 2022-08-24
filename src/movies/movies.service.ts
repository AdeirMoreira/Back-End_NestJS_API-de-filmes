import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AutenticationService } from 'src/autentication/autentication.service';
import { UuidService } from 'src/uuid/uuid.service';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movies } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movies)
    private moviesRepositories: Repository<Movies>,
    private readonly uuid: UuidService
  ) {}

  create(createMovieDto: CreateMovieDto) {
    createMovieDto.id = this.uuid.generate()
    return this.moviesRepositories.save(createMovieDto)
  }

  findAll():Promise<Movies[]> {
    return this.moviesRepositories.find()
  }

  findOne(id: string):Promise<Movies> {
    return this.moviesRepositories.findOneBy({id})
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    return this.moviesRepositories.update(id,updateMovieDto)
  }

  remove(id: string) {
    return this.moviesRepositories.delete(id)
  }
}
