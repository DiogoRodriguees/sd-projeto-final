import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { UserService } from 'src/services/UserModule';
import { ResponseDTO } from 'src/shared/dtos/Response';
import { UserDTO } from 'src/shared/dtos/UserDTO';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async register(@Body() userDTO: UserDTO) {
    await this.userService.register(userDTO);
    return new ResponseDTO(HttpStatus.CREATED, 'Success on create user');
  }

  @Get()
  async list() {
    const users = await this.userService.list();
    return new ResponseDTO(HttpStatus.OK, 'Success on list users', users);
  }

  @Post('/sign-in')
  async signIn(@Body() userDTO: UserDTO) {
    const user = await this.userService.findByEmail(userDTO.email);
    const authDTO = await this.userService.authenticate(user, userDTO);
    return new ResponseDTO(HttpStatus.OK, 'Success on sign in user', authDTO);
  }
}
