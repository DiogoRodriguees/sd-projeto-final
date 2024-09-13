import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestRepository } from '../repositories/InterestRepository';
import { InterestService } from '../services/interestservice';
import { PublicationModule } from './publicationmodule'; // Importe o módulo de publicações
import { PublicationService } from 'src/services/PublicationService';
import { InterestEntity } from 'src/@core/entities/InterestEntity';
import { PublicationRepository } from 'src/repositories/PublicationRepository';
import { PublicationEntity } from 'src/@core/entities/PublicationEntity';
import { InterestController } from 'src/controllers/InterestController';
import { PublicationsController } from 'src/controllers/Publication';

@Module({
  imports: [TypeOrmModule.forFeature([InterestEntity, PublicationEntity])], // Adicione PublicationModule aqui
  providers: [PublicationRepository, InterestService, PublicationService, InterestRepository],
  controllers: [InterestController, PublicationsController]
})
export class InterestModule {}
