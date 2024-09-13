import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthorizationService } from 'src/services/AuthorizationService';
import { ResponseDTO } from 'src/shared/dtos/Response';
import { UserDTO } from 'src/shared/dtos/UserDTO';
import { EmailClient } from 'src/shared/productors/EmailClient';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: AuthorizationService,
    private readonly emailClient: EmailClient,
  ) {}

  @Post('/sign-in')
  async signIn(@Body() userDTO: UserDTO) {
    const user = await this.userService.findByEmail(userDTO.email);
    const authDTO = await this.userService.authenticate(user, userDTO);
    console.log('Proxima linha vai notificar');
    await this.emailClient.notificateLogin();
    return new ResponseDTO(HttpStatus.OK, 'Success on sign in user', authDTO);
  }
}
