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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const UserModule_1 = require("../services/UserModule");
const Response_1 = require("../shared/dtos/Response");
const UserDTO_1 = require("../shared/dtos/UserDTO");
const AuthGuard_1 = require("../shared/guards/AuthGuard");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async register(userDTO) {
        await this.userService.register(userDTO);
        return new Response_1.ResponseDTO(common_1.HttpStatus.CREATED, 'Success on create user');
    }
    async list() {
        const users = await this.userService.list();
        return new Response_1.ResponseDTO(common_1.HttpStatus.OK, 'Success on list users', users);
    }
    async signIn(userDTO) {
        const user = await this.userService.findByEmail(userDTO.email);
        const authDTO = await this.userService.authenticate(user, userDTO);
        return new Response_1.ResponseDTO(common_1.HttpStatus.OK, 'Success on sign in user', authDTO);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDTO_1.UserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(AuthGuard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "list", null);
__decorate([
    (0, common_1.Post)('/sign-in'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDTO_1.UserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signIn", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [UserModule_1.UserService])
], UserController);
//# sourceMappingURL=UserController.js.map