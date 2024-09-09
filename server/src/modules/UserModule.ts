import { Module } from '@nestjs/common';
import { UserEntity } from 'src/@core/entities/UserEntity';
import { UserController } from 'src/controllers/UserController';
import { UserRepository } from 'src/repositories/UserRepository';
import { UserService } from 'src/services/UserService';
import { CassandraModule } from 'src/shared/config/cassandra.module';

@Module({
  imports: [CassandraModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
