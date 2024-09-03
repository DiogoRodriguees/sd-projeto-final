import { AuthGuard } from '../guards/AuthGuard';
export declare class Providers {
    static AUTH_GUARD: {
        provide: string;
        useClass: typeof AuthGuard;
    };
}
