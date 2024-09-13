import { Body, Controller, Get, HttpStatus, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { PublicationService } from 'src/services/PublicationService';
import { PublicationDTO } from 'src/shared/dtos/PublicationDTO';
import { Request } from 'src/shared/dtos/Request';
import { ResponseDTO } from 'src/shared/dtos/Response';
import { AuthGuard } from 'src/shared/guards/AuthGuard';

@Controller('/publications')
export class PublicationsController {
  constructor(private readonly publicationService: PublicationService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Req() req: Request, @Body() publicationDTO: PublicationDTO) {
    const data = await this.publicationService.create(req.user.id, publicationDTO);
    return new ResponseDTO(HttpStatus.OK, 'Success on create publication', data);
  }

  @Get()
  @UseGuards(AuthGuard)
  async list() {
    const publications = await this.publicationService.list();
    return new ResponseDTO(HttpStatus.OK, 'Success on list publications', publications);
  }

   // Novo endpoint para listar as publicações dos autores em que o usuário está interessado
   @Get('/interesse')
   @UseGuards(AuthGuard)
   async listByInterest(@Req() req: Request, @Query('autorIds') autorIds: number[]) {
     // Validação: garantir que a lista de autorIds seja enviada
     if (!autorIds || autorIds.length === 0) {
       return new ResponseDTO(HttpStatus.BAD_REQUEST, 'No authors specified', []);
     }
 
     const publications = await this.publicationService.listByAuthorIds(autorIds);
     return new ResponseDTO(HttpStatus.OK, 'Success on listing publications by interest', publications);
   }
   
}
