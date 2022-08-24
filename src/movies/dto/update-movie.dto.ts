import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {

    @ApiProperty({required: false, default: 'movie name'})
    name: string

    @ApiProperty({required: false, default: 'movie category'})
    category: string

    @ApiProperty({required: false, default: '2000/10/10'})
    premiere_date: string

    @ApiProperty({required: false, default: 'movie description'})
    description: string

    @ApiProperty({required: false, default: 100})
    duration: number
}
