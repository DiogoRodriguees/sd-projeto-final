import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/@core/entities/UserEntity';
import { AuthController } from 'src/controllers/Authorization';
import { AuthorizationRepository } from 'src/repositories/UserRepository';
import { AuthorizationService } from 'src/services/AuthorizationService';
import { EmailClientConfig } from 'src/shared/config/EmailClientConfig';
import { EmailClient } from 'src/shared/productors/EmailClient';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), ClientsModule.register(EmailClientConfig)],
  controllers: [AuthController],
  providers: [AuthorizationService, EmailClient, AuthorizationRepository],
})
export class UserModule {}
