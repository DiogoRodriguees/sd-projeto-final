import { PublicationEntity } from 'src/@core/entities/PublicationEntity';
import { PublicationDTO } from 'src/shared/dtos/PublicationDTO';
import { Repository } from 'typeorm';
export declare class PublicationRepository {
    private repository;
    constructor(repository: Repository<PublicationEntity>);
    list(): Promise<PublicationEntity[]>;
    create(publicationDTO: PublicationDTO, autorId: number): Promise<PublicationEntity>;
}
