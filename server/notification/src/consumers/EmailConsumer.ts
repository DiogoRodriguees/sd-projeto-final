import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

class UserDTO {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

@Controller()
export class EmailConsumer {
  constructor() {}

  @MessagePattern('NOTIFICATE_LOGIN')
  public async notificateUserCreated(userDTO: UserDTO) {
    console.log(userDTO);
  }
}
