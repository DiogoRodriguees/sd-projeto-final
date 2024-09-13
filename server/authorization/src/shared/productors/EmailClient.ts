import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class EmailClient {
  constructor(@Inject('EMAIL_CLIENT') readonly emailClient: ClientProxy) {}

  public async notificateLogin() {
    console.log('Sending notification');
    this.emailClient.send('EMAIL_QUEUE', 'Notificating login');
  }
}
