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
    return await this.publicationRepository.create(publicationDTO, autorId);
  }

  // Novo método para listar publicações dos autores de interesse
  public async listByAuthorIds(autorIds: number[]) {
    // Validação: garantir que autorIds não seja uma lista vazia
    if (!autorIds || autorIds.length === 0) {
      return [];
    }
    return await this.publicationRepository.findByAutorIds(autorIds);
  }
}
