import { AppService } from '../services/AppService';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
}
