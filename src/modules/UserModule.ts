import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/@core/entities/UserEntity';
import { UserController } from 'src/controllers/UserController';
import { UserRepository } from 'src/repositories/UserRepository';
import { UserService } from 'src/services/UserModule';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
