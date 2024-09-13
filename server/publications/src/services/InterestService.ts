import { Injectable } from '@nestjs/common';
import { InterestRepository } from 'src/repositories/InterestRepository';

@Injectable()
export class InterestService {
  constructor(private readonly interestRepository: InterestRepository) {}

  // Mark an interest
  async markInterest(userId: number, autorId: number) {
    return await this.interestRepository.markInterest(userId, autorId);
  }

  // Get a list of the authors the user is interested in
  async getInterestsByUserId(userId: number) {
    return await this.interestRepository.findByUserId(userId);
  }
}
