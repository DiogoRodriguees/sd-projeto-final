import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailerService {
  private transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('GMAIL_USER'), // Pegando variáveis de ambiente do configs.env
        pass: this.configService.get<string>('GMAIL_PASSWORD'),
      },
    });
  }

  async sendMail(to: string, subject: string, body: string) {
    const mailOptions = {
      from: this.configService.get<string>('GMAIL_USER'),
      to,
      subject,
      text: body,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}
