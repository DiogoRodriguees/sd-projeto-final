import { Module } from '@nestjs/common';
import { CassandraService } from 'src/services/cassandra.service';

@Module({
  providers: [CassandraService],
  exports: [CassandraService],
})
export class CassandraModule {}
