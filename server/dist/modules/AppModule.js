"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const RolesEntity_1 = require("../@core/entities/RolesEntity");
const UserEntity_1 = require("../@core/entities/UserEntity");
const UserRolesEntity_1 = require("../@core/entities/UserRolesEntity");
const DatabaseConfig_1 = require("../shared/config/DatabaseConfig");
const JwtConfig_1 = require("../shared/config/JwtConfig");
const AppController_1 = require("../controllers/AppController");
const AppService_1 = require("../services/AppService");
const PublicationModule_1 = require("./PublicationModule");
const UserModule_1 = require("./UserModule");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot(DatabaseConfig_1.DatabaseConfig.REGISTER),
            typeorm_1.TypeOrmModule.forFeature([UserEntity_1.UserEntity, RolesEntity_1.RolesEntity, UserRolesEntity_1.UserRolesEntity]),
            jwt_1.JwtModule.register(JwtConfig_1.JwtConfig.REGISTER),
            UserModule_1.UserModule,
            PublicationModule_1.PublicationModule,
        ],
        controllers: [AppController_1.AppController],
        providers: [AppService_1.AppService, jwt_1.JwtService],
    })
], AppModule);
//# sourceMappingURL=AppModule.js.map