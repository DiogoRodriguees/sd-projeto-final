import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private emailClient;

  constructor() {
    this.emailClient = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'christofer2n2@gmail.com', // Pegando variáveis de ambiente do configs.env
        pass: 'kctx ybkf qnht bfkv',
      },
    });
  }

  async sendMail(to: string, subject: string, body: string) {
    const mailOptions = {
      from: 'christofer2n2@gmail.com',
      to,
      subject,
      text: body,
    };

    return await this.emailClient.sendMail(mailOptions);
  }
}
