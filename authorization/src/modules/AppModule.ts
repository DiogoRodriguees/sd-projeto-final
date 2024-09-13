import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtConfig } from 'src/shared/config/JwtConfig';
import { Providers } from 'src/shared/providers/Providers';
import { UserModule as AuthorizationModule } from './AuthorizationModule';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register(JwtConfig.REGISTER),
    AuthorizationModule,
  ],
  providers: [JwtService, Providers.LOGGER_PROVIDER],
})
export class AppModule {}
