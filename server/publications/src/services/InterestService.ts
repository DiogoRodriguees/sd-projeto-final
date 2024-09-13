import { Injectable } from '@nestjs/common';
import { InterestRepository } from 'src/repositories/InterestRepository';
import { PublicationService } from './PublicationService';

@Injectable()
export class InterestService {
  constructor(private readonly interestRepository: InterestRepository,  private readonly publicationsService: PublicationService) {}

  // Mark an interest
  async markInterest(userId: number, autorId: number) {
    return await this.interestRepository.markInterest(userId, autorId);
  }

  // Get a list of the authors the user is interested in
  async getInterestsByUserId(userId: number): Promise<any> {
    // Obtém os IDs dos usuários que o usuário atual tem interesse
    const interests = await this.interestRepository.findByUserId(userId);
    const interestedUserIds = interests.map(interest => interest.autorId);

    // Obtém as publicações dos usuários nos quais o usuário tem interesse
    const publications = await this.publicationsService.getPublicationsByUserIds(interestedUserIds);

    return publications;
  }
}
