import { PublicationService } from 'src/services/PublicationService';
import { PublicationDTO } from 'src/shared/dtos/PublicationDTO';
import { Request } from 'src/shared/dtos/Request';
import { ResponseDTO } from 'src/shared/dtos/Response';
export declare class PublicationsController {
    private readonly publicationService;
    constructor(publicationService: PublicationService);
    create(req: Request, publicationDTO: PublicationDTO): Promise<ResponseDTO<import("../@core/entities/PublicationEntity").PublicationEntity>>;
    list(): Promise<ResponseDTO<import("../@core/entities/PublicationEntity").PublicationEntity[]>>;
    markAsInteressed(req: any, publicationID: number): Promise<ResponseDTO<any[]>>;
}
