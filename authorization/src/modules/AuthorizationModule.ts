import { Module } from '@nestjs/common';
import { CassandraModule } from 'src/cassandra/cassandra.module';
import { AuthController } from 'src/controllers/Authorization';
import { AuthorizationService } from 'src/services/AuthorizationService';

@Module({
  imports: [CassandraModule],
  controllers: [AuthController],
  providers: [AuthorizationService],
})
export class UserModule {}
