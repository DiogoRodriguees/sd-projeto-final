import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Pattners } from 'src/shared/consts/Pattners';

@Controller()
export class EmailConsumer {
  constructor() {}

  @MessagePattern(Pattners.NOTIFICATE_LOGIN)
  public async notificateUserCreated() {
    console.log('Message received');
  }
}
