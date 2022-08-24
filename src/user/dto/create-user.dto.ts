import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    id:string

    @ApiProperty({required: true, default: 'test name'})
    name:string

    @ApiProperty({required: true, default: 'teste@email.com'})
    email:string

    @ApiProperty({required: true, default: 'password'})
    password:string
}
