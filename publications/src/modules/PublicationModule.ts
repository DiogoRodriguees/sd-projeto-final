import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationEntity } from 'src/@core/entities/PublicationEntity';
import { PublicationsController } from 'src/controllers/Publication';
import { PublicationRepository } from 'src/repositories/PublicationRepository';
import { PublicationService } from 'src/services/PublicationService';

@Module({
  imports: [TypeOrmModule.forFeature([PublicationEntity])],
  providers: [PublicationService, PublicationRepository],
  controllers: [PublicationsController],
})
export class PublicationModule {}
