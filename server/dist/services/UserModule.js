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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const UserRepository_1 = require("../repositories/UserRepository");
const AuthenticationDTO_1 = require("../shared/dtos/AuthenticationDTO");
let UserService = class UserService {
    constructor(jwtService, userRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }
    async authenticate(user, credentials) {
        if (!user || user.password !== credentials.password)
            throw new common_1.UnauthorizedException('Credentials incorrect');
        const payload = { id: user.id, name: user.email, email: user.email };
        const token = await this.jwtService.signAsync(payload);
        return new AuthenticationDTO_1.AuthenticationDTO(token);
    }
    async register(user) {
        this.userRepository.register(user);
    }
    async list() {
        return await this.userRepository.list();
    }
    async findByEmail(email) {
        return await this.userRepository.findByEmail(email);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        UserRepository_1.UserRepository])
], UserService);
//# sourceMappingURL=UserModule.js.map