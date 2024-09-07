import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/@core/entities/UserEntity';
import { UserController } from 'src/controllers/Authorization';
import { AuthorizationRepository } from 'src/repositories/UserRepository';
import { AuthorizationService } from 'src/services/AuthorizationService';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [AuthorizationService, AuthorizationRepository],
})
export class UserModule {}
