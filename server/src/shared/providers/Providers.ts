import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthGuard } from '../guards/AuthGuard';
import { LoggingInterceptor } from '../interceptors/Interceptors';

export class Providers {
  public static AUTH_GUARD = {
    provide: APP_GUARD,
    useClass: AuthGuard,
  };

  public static LOGGER_PROVIDER = {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor,
  };
}
