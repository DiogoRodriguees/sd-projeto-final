import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PublicationEntity } from 'src/@core/entities/PublicationEntity';
import { PublicationDTO } from 'src/shared/dtos/PublicationDTO';
import { Repository } from 'typeorm';

@Injectable()
export class PublicationRepository {
  constructor(@InjectRepository(PublicationEntity) private repository: Repository<PublicationEntity>) {}

  public async list() {
    return await this.repository.find();
  }

  public async create(publicationDTO: PublicationDTO, autorId: number) {
    const publicationEntity = PublicationEntity.create(publicationDTO, autorId);
    return await this.repository.save(publicationEntity);
  }
}
