import { Module } from '@nestjs/common';
import { CassandraModule } from 'src/cassandra/cassandra.module';
import { PublicationsController } from 'src/controllers/Publication';
import { PublicationService } from 'src/services/PublicationService';

@Module({
  imports: [CassandraModule],
  providers: [PublicationService],
  controllers: [PublicationsController],
})
export class PublicationModule {}
