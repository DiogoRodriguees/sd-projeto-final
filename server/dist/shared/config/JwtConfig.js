"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtConfig = void 0;
class JwtConfig {
}
exports.JwtConfig = JwtConfig;
JwtConfig.SECRET = 'secret';
JwtConfig.EXPERED_TIME = '3600s';
JwtConfig.REGISTER = {
    global: true,
    secret: JwtConfig.SECRET,
    signOptions: { expiresIn: JwtConfig.EXPERED_TIME },
};
//# sourceMappingURL=JwtConfig.js.map