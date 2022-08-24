import { ApiProperty } from "@nestjs/swagger"

export class CreateMovieDto {

    id:string
    
    @ApiProperty({required: true, default: 'movie name'})
    name: string
    
    @ApiProperty({required: true, default: 'movie category'})
    category: string
    
    @ApiProperty({required: true, default: '2000/10/10'})
    premiere_date: string
    
    @ApiProperty({required: true, default: 'movie description'})
    description: string
    
    @ApiProperty({required: true, default: 100})
    duration: number
}
