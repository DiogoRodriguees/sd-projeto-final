"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Providers = void 0;
const core_1 = require("@nestjs/core");
const AuthGuard_1 = require("../guards/AuthGuard");
class Providers {
}
exports.Providers = Providers;
Providers.AUTH_GUARD = {
    provide: core_1.APP_GUARD,
    useClass: AuthGuard_1.AuthGuard,
};
//# sourceMappingURL=Providers.js.map