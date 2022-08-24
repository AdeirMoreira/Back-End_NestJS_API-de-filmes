import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class LoginDto extends PartialType(CreateUserDto) {
    @ApiProperty({required: true, default: 'test name'})
    name:string

    @ApiProperty({required: true, default: 'teste@email.com'})
    email:string
}
