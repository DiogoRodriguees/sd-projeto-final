"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const AppService_1 = require("../services/AppService");
const mailer_service_1 = require("../mailer/mailer.service");
let AppController = class AppController {
    constructor(appService, mailerService) {
        this.appService = appService;
        this.mailerService = mailerService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async sendEmail() {
        const to = 'christofer0888@gmail.com';
        const subject = 'NestJS Email Test';
        const body = 'This is a test email sent using Gmail SMTP with NestJS and Yarn!';
        await this.mailerService.sendMail(to, subject, body);
        return 'Email sent successfully!';
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('send-email'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "sendEmail", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [AppService_1.AppService,
        mailer_service_1.MailerService])
], AppController);
//# sourceMappingURL=AppController.js.map