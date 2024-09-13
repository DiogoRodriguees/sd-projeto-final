import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDTO } from '../dtos/UserDTO';

@Injectable()
export class EmailClient {
  constructor(@Inject('EMAIL_CLIENT') readonly emailClient: ClientProxy) {}

  public async notificateLogin(userDTO: UserDTO) {
    console.log('Sending notification');
    this.emailClient.send('NOTIFICATE_LOGIN', userDTO).subscribe({
      complete: () => console.log('Success on send login'),
      error: (err) => console.log('Error on send notification login: ' + JSON.stringify(err)),
    });
  }
}
