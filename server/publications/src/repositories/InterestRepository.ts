import { EntityRepository, Repository } from 'typeorm';
import { InterestEntity } from 'src/@core/entities/InterestEntity';

@EntityRepository(InterestEntity)
export class InterestRepository extends Repository<InterestEntity> {
  
  // Método para buscar todos os interesses de um usuário específico
  async findByUserId(userId: number): Promise<InterestEntity[]> {
    try {
      return await this.find({
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
      const interest = this.create({
        user: { id: userId }, // Define a relação com o usuário
        autorId: interestedUserId,
      });
      return await this.save(interest);
    } catch (error) {
      console.error('Erro ao marcar interesse:', error);
      throw new Error('Erro ao marcar interesse');
    }
  }
}
