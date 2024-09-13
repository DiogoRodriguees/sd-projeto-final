import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/UserController';
import { UserService } from 'src/services/UserService';
import { CassandraModule } from 'src/cassandra/cassandra.module';

@Module({
  imports: [CassandraModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
