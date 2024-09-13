import { Injectable } from '@nestjs/common';
import { PublicationEntity } from 'src/@core/entities/PublicationEntity';
import { PublicationRepository } from 'src/repositories/PublicationRepository';
import { PublicationDTO } from 'src/shared/dtos/PublicationDTO';
import { InterestService } from './InterestService';
import { Repository } from 'typeorm';
import { In } from 'typeorm';

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

  async getPublicationsByUserIds(userIds: number[]): Promise<PublicationEntity[]> {
    try {
      return await this.publicationRepository.find(userIds);
    } catch (error) {
      console.error('Erro ao buscar publicações por IDs de usuários:', error);
      throw new Error('Erro ao buscar publicações');
    }
  }
}
