import { Injectable } from '@nestjs/common';
import { PublicationRepository } from 'src/repositories/PublicationRepository';
import { PublicationDTO } from 'src/shared/dtos/PublicationDTO';

@Injectable()
export class PublicationService {
  constructor(private readonly publicationRepository: PublicationRepository) {}

  public async list() {
    return await this.publicationRepository.list();
  }

  public async create(autorId: number, publicationDTO: PublicationDTO) {
    const result = await this.publicationRepository.create(publicationDTO, autorId);
    return result;
  }
}
