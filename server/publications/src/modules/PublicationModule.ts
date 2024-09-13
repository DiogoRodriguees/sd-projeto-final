import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestEntity } from 'src/@core/entities/InterestEntity';
import { PublicationEntity } from 'src/@core/entities/PublicationEntity';
import { PublicationsController } from 'src/controllers/Publication';
import { PublicationRepository } from 'src/repositories/PublicationRepository';
import { PublicationService } from 'src/services/PublicationService';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PublicationEntity, InterestEntity])],
  providers: [PublicationService, PublicationRepository, Repository<InterestEntity>],
  controllers: [PublicationsController],
})
export class PublicationModule {}
