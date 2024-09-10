import { PublicationRepository } from 'src/repositories/PublicationRepository';
import { PublicationDTO } from 'src/shared/dtos/PublicationDTO';
export declare class PublicationService {
    private readonly publicationRepository;
    constructor(publicationRepository: PublicationRepository);
    list(): Promise<import("../@core/entities/PublicationEntity").PublicationEntity[]>;
    create(autorId: number, publicationDTO: PublicationDTO): Promise<import("../@core/entities/PublicationEntity").PublicationEntity>;
}
