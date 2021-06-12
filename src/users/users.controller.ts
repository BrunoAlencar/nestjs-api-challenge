import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUsePasswordDto } from './dto/update-user-password';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const res = await this.usersService.create(createUserDto);
    console.log(res);
    return 'Ok';
  }

  @Patch()
  async changePassword(@Body() updateUserDto: UpdateUsePasswordDto) {
    const res = await this.usersService.create(updateUserDto);
    console.log(res);
    return 'Ok';
  }
}
