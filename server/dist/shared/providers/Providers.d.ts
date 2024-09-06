import { AuthGuard } from '../guards/AuthGuard';
import { LoggingInterceptor } from '../interceptors/Interceptors';
export declare class Providers {
    static AUTH_GUARD: {
        provide: string;
        useClass: typeof AuthGuard;
    };
    static LOGGER_PROVIDER: {
        provide: string;
        useClass: typeof LoggingInterceptor;
    };
}
