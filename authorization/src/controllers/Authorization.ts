import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthorizationService } from 'src/services/AuthorizationService';
import { ResponseDTO } from 'src/shared/dtos/Response';
import { UserDTO } from 'src/shared/dtos/UserDTO';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: AuthorizationService) {}

  @Post('/sign-in')
  async signIn(@Body() userDTO: UserDTO) {
    try {
      const user = await this.userService.findByEmail(userDTO.email);
      const authDTO = await this.userService.authenticate(user, userDTO);
      return new ResponseDTO(HttpStatus.OK, 'Success on sign in user', authDTO);
    }
    catch (error) {
      return new ResponseDTO(HttpStatus.INTERNAL_SERVER_ERROR, 'Something went wrong while logging in: ' + error.message);
    }
  }
}
