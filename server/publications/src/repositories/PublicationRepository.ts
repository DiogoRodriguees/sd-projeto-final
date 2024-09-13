import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PublicationEntity } from 'src/@core/entities/PublicationEntity';
import { PublicationDTO } from 'src/shared/dtos/PublicationDTO';

@Injectable()
export class PublicationRepository {
  constructor(@InjectRepository(PublicationEntity) private repository: Repository<PublicationEntity>) {}

  // Método para buscar publicações com base em uma lista de autorIds
  async findByAutorIds(autorIds: number[]): Promise<PublicationEntity[]> {
    return this.repository.createQueryBuilder('publication')
      .where('publication.autorId IN (:...autorIds)', { autorIds })
      .getMany();
  }

  public async list() {
    return await this.repository.find();
  }

  public async create(publicationDTO: PublicationDTO, autorId: number) {
    const publicationEntity = this.repository.create({ ...publicationDTO, autorId });
    return await this.repository.save(publicationEntity);
  }
}
