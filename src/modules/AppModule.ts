import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/@core/entities/UserEntity';
import { DatabaseConfig } from 'src/shared/config/DatabaseConfig';
import { JwtConfig } from 'src/shared/config/JwtConfig';
import { AppController } from '../controllers/AppController';
import { AppService } from '../services/AppService';
import { UserModule } from './UserModule';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(DatabaseConfig.REGISTER),
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register(JwtConfig.REGISTER),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}
