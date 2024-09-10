import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesEntity } from 'src/@core/entities/RolesEntity';
import { UserEntity } from 'src/@core/entities/UserEntity';
import { UserRolesEntity } from 'src/@core/entities/UserRolesEntity';
import { DatabaseConfig } from 'src/shared/config/DatabaseConfig';
import { JwtConfig } from 'src/shared/config/JwtConfig';
import { Providers } from 'src/shared/providers/Providers';
import { UserModule as AuthorizationModule } from './AuthorizationModule';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(DatabaseConfig.REGISTER),
    TypeOrmModule.forFeature([UserEntity, RolesEntity, UserRolesEntity]),
    JwtModule.register(JwtConfig.REGISTER),
    AuthorizationModule,
  ],
  providers: [JwtService, Providers.LOGGER_PROVIDER],
})
export class AppModule {}
