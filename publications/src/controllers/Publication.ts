import { Body, Controller, Get, HttpStatus, Param, Post, Req, UseGuards } from '@nestjs/common';
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
    try {
      const data = await this.publicationService.create(req.user.id, publicationDTO);
      return new ResponseDTO(HttpStatus.CREATED, 'Success on create publication', data);
    } catch (error) {
      throw new ResponseDTO(HttpStatus.INTERNAL_SERVER_ERROR, 'Something went wrong while creating publication: ' + error.message);
    }
  }

  @Get()
  @UseGuards(AuthGuard)
  async list() {
    const publications = await this.publicationService.list();
    return new ResponseDTO(HttpStatus.OK, 'Success on list publications', publications);
  }

  @Post('/interesse/:id')
  @UseGuards(AuthGuard)
  async markAsInteressed(@Req() req: any, @Param('id') publicationID: number) {
    return new ResponseDTO(HttpStatus.OK, 'Success on mark publication', []);
  }
}
