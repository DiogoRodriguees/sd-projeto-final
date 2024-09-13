import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/@core/entities/UserEntity';
import { AuthController } from 'src/controllers/Authorization';
import { AuthorizationRepository } from 'src/repositories/UserRepository';
import { AuthorizationService } from 'src/services/AuthorizationService';
import { EmailClient } from 'src/shared/productors/EmailClient';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([UserEntity]),
    ClientsModule.register([
      {
        name: 'EMAIL_CLIENT',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@rabbitmq:5672'],
          queue: 'EMAIL_QUEUE',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthorizationService, EmailClient, AuthorizationRepository],
})
export class UserModule {}
