import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from 'src/services/UserService';
import { ResponseDTO } from 'src/shared/dtos/Response';
import { UserDTO } from 'src/shared/dtos/UserDTO';
import { AuthGuard } from 'src/shared/guards/AuthGuard';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async register(@Body() userDTO: UserDTO) {
    try {
      const response = await this.userService.register(userDTO);
      
      if (response == true) {
        return new ResponseDTO(HttpStatus.CREATED, 'User created successfully!');
      } else {
        return new ResponseDTO(HttpStatus.INTERNAL_SERVER_ERROR, 'Something went wrong while creating user.');
      }
    } catch (error) {
      throw new HttpException('Something went wrong while creating user.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // @Get()
  // @UseGuards(AuthGuard)
  // async list() {
  //   const users = await this.userService.list();
  //   return new ResponseDTO(HttpStatus.OK, 'Success on list users', users);
  // }

  // @Post('/sign-in')
  // async signIn(@Body() userDTO: UserDTO) {
  //   const user = await this.userService.findByEmail(userDTO.email);
  //   const authDTO = await this.userService.authenticate(user, userDTO);
  //   return new ResponseDTO(HttpStatus.OK, 'Success on sign in user', authDTO);
  // }
}
