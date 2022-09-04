import { Controller, Get, Post, Body, Param, Delete, HttpCode, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from 'src/autentication/local-auth.guard';
import { AutenticationService } from 'src/autentication/autentication.service';
import { JwtAuthGuard } from 'src/autentication/jwt-auth.guard';


@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly autenticatioService: AutenticationService
    ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(200) 
  login(@Request() req){
    return this.autenticatioService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
