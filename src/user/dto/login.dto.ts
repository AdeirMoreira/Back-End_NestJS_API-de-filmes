import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class LoginDto extends PartialType(CreateUserDto) {
    username:string

    @ApiProperty({required: true, default: 'teste@email.com'})
    email:string
    
    @ApiProperty({required: true, default: 'password'})
    password:string
}
