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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationsController = void 0;
const common_1 = require("@nestjs/common");
const PublicationService_1 = require("../services/PublicationService");
const PublicationDTO_1 = require("../shared/dtos/PublicationDTO");
const Request_1 = require("../shared/dtos/Request");
const Response_1 = require("../shared/dtos/Response");
const AuthGuard_1 = require("../shared/guards/AuthGuard");
let PublicationsController = class PublicationsController {
    constructor(publicationService) {
        this.publicationService = publicationService;
    }
    async create(req, publicationDTO) {
        const data = await this.publicationService.create(req.user.id, publicationDTO);
        return new Response_1.ResponseDTO(common_1.HttpStatus.OK, 'Success on create publication', data);
    }
    async markAsInteressed(req, publicationID) {
        return new Response_1.ResponseDTO(common_1.HttpStatus.OK, 'Success on mark publication', []);
    }
    async list() {
        const publications = await this.publicationService.list();
        return new Response_1.ResponseDTO(common_1.HttpStatus.OK, 'Success on list publications', publications);
    }
};
exports.PublicationsController = PublicationsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(AuthGuard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request_1.Request, PublicationDTO_1.PublicationDTO]),
    __metadata("design:returntype", Promise)
], PublicationsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/interesse/:id'),
    (0, common_1.UseGuards)(AuthGuard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], PublicationsController.prototype, "markAsInteressed", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(AuthGuard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PublicationsController.prototype, "list", null);
exports.PublicationsController = PublicationsController = __decorate([
    (0, common_1.Controller)('/publications'),
    __metadata("design:paramtypes", [PublicationService_1.PublicationService])
], PublicationsController);
//# sourceMappingURL=Publication.js.map