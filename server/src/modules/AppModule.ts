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
import { AppController } from '../controllers/AppController';
import { AppService } from '../services/AppService';
import { PublicationModule } from './PublicationModule';
import { UserModule } from './UserModule';
import { MailerModule } from '../mailer/mailer.module';
import { join } from 'path';
import { MailerService } from 'src/mailer/mailer.service';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: join(__dirname, '../../configs.env'), isGlobal: true }),
    TypeOrmModule.forRoot(DatabaseConfig.REGISTER),
    TypeOrmModule.forFeature([UserEntity, RolesEntity, UserRolesEntity]),
    JwtModule.register(JwtConfig.REGISTER),
    UserModule,
    PublicationModule,
    MailerModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtService, Providers.LOGGER_PROVIDER, MailerService],
})
export class AppModule {}
