import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movies } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movies)
    private moviesRepositories: Repository<Movies>,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    return this.moviesRepositories.save(createMovieDto)
  }

  findAll():Promise<Movies[]> {
    return this.moviesRepositories.find()
  }

  findOne(id: string):Promise<Movies> {
    return this.moviesRepositories.findOneBy({id})
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    return 
  }

  remove(id: string) {
    return this.moviesRepositories.delete(id)
  }
}
