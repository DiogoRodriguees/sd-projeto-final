"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfig = void 0;
const PublicationEntity_1 = require("../../@core/entities/PublicationEntity");
const RolesEntity_1 = require("../../@core/entities/RolesEntity");
const UserEntity_1 = require("../../@core/entities/UserEntity");
const UserRolesEntity_1 = require("../../@core/entities/UserRolesEntity");
class DatabaseConfig {
}
exports.DatabaseConfig = DatabaseConfig;
DatabaseConfig.REGISTER = {
    type: 'sqlite',
    database: 'distributed-system.sqlite',
    entities: [UserEntity_1.UserEntity, RolesEntity_1.RolesEntity, UserRolesEntity_1.UserRolesEntity, PublicationEntity_1.PublicationEntity],
    autoLoadEntities: true,
    synchronize: true,
};
//# sourceMappingURL=DatabaseConfig.js.map