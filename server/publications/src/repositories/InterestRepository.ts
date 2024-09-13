import { Repository } from 'typeorm';
import { InterestEntity } from 'src/@core/entities/InterestEntity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InterestRepository {
  constructor(
    @InjectRepository(InterestEntity)
    private readonly repository: Repository<InterestEntity>,
  ) {}

  // Método para buscar todos os interesses de um usuário específico
  async findByUserId(userId: number): Promise<InterestEntity[]> {
    try {
      return await this.repository.find({
        where: { user: { id: userId } }, // Corrigido para buscar pela relação com UserEntity
        relations: ['user'], // Inclui a relação com a entidade User
      });
    } catch (error) {
      console.error('Erro ao buscar interesses por userId:', error);
      throw new Error('Erro ao buscar interesses');
    }
  }

  // Método para marcar um novo interesse
  async markInterest(userId: number, interestedUserId: number): Promise<InterestEntity> {
    try {
      const interest = this.repository.create({
        user: { id: userId }, // Define a relação com o usuário
        autorId: interestedUserId,
      });
      return await this.repository.save(interest);
    } catch (error) {
      console.error('Erro ao marcar interesse:', error);
      throw new Error('Erro ao marcar interesse');
    }
  }
}
