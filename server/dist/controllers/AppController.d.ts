import { AppService } from '../services/AppService';
import { MailerService } from '../mailer/mailer.service';
export declare class AppController {
    private readonly appService;
    private readonly mailerService;
    constructor(appService: AppService, mailerService: MailerService);
    getHello(): string;
    sendEmail(): Promise<string>;
}
