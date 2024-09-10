import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services/AppService';
import { MailerService } from '../mailer/mailer.service'; // Import the MailerService

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mailerService: MailerService // Inject MailerService here
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('send-email')
  async sendEmail() {
    const to = 'christofer0888@gmail.com';
    const subject = 'NestJS Email Test';
    const body = 'This is a test email sent using Gmail SMTP with NestJS and Yarn!';

    await this.mailerService.sendMail(to, subject, body); // Call the MailerService to send email
    return 'Email sent successfully!';
  }
}
