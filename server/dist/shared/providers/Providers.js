"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Providers = void 0;
const core_1 = require("@nestjs/core");
const AuthGuard_1 = require("../guards/AuthGuard");
const Interceptors_1 = require("../interceptors/Interceptors");
class Providers {
}
exports.Providers = Providers;
Providers.AUTH_GUARD = {
    provide: core_1.APP_GUARD,
    useClass: AuthGuard_1.AuthGuard,
};
Providers.LOGGER_PROVIDER = {
    provide: core_1.APP_INTERCEPTOR,
    useClass: Interceptors_1.LoggingInterceptor,
};
//# sourceMappingURL=Providers.js.map