import { PublicationDTO } from 'src/shared/dtos/PublicationDTO';
export declare class PublicationEntity {
    id: number;
    autorId: number;
    title: string;
    content: string;
    constructor(title: string, content: string, autorId: number);
    static create(publicationDTO: PublicationDTO, autorId: number): PublicationEntity;
}
