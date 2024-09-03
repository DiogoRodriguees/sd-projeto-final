import { ResponseDTO } from 'src/shared/dtos/Response';
export declare class PublicationsController {
    constructor();
    create(req: any, publicationDTO: any): Promise<ResponseDTO<unknown>>;
    markAsInteressed(req: any, publicationID: number): Promise<ResponseDTO<any[]>>;
    listByUser(): Promise<ResponseDTO<any[]>>;
}
