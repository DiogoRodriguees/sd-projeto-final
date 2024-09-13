import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { EmailService } from 'src/services/EmailService';
import { UserDTO } from 'src/shared/dtos/UserDTO';

@Controller()
export class EmailConsumer {
  constructor(private readonly emailService: EmailService) {}

  @MessagePattern('NOTIFICATE_LOGIN')
  public async notificateUserCreated(userDTO: UserDTO) {
    console.log(userDTO);
    await this.emailService.sendMail('diogorodrigueslife@gmail.com', 'Login registrado', 'Você fez um novo login na plataforma');
  }
}
