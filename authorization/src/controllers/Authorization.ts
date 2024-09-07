import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthorizationService } from 'src/services/AuthorizationService';
import { ResponseDTO } from 'src/shared/dtos/Response';
import { UserDTO } from 'src/shared/dtos/UserDTO';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: AuthorizationService) {}

  @Post('/sign-in')
  async signIn(@Body() userDTO: UserDTO) {
    const user = await this.userService.findByEmail(userDTO.email);
    const authDTO = await this.userService.authenticate(user, userDTO);
    return new ResponseDTO(HttpStatus.OK, 'Success on sign in user', authDTO);
  }
}
