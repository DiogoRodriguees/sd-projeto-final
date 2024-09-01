import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../guards/AuthGuard';

export class Providers {
  public static AUTH_GUARD = {
    provide: APP_GUARD,
    useClass: AuthGuard,
  };
}
