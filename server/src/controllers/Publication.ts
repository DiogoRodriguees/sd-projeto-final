import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ResponseDTO } from 'src/shared/dtos/Response';
import { AuthGuard } from 'src/shared/guards/AuthGuard';

@Controller('/publications')
export class PublicationsController {
  constructor() {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Req() req: any, @Body() publicationDTO: any) {
    return new ResponseDTO(HttpStatus.OK, 'Success on create publication');
  }

  @Post('/interesse/:id')
  @UseGuards(AuthGuard)
  async markAsInteressed(@Req() req: any, @Param('id') publicationID: number) {
    return new ResponseDTO(HttpStatus.OK, 'Success on mark publication', []);
  }

  @Get()
  @UseGuards(AuthGuard)
  async listByUser() {
    return new ResponseDTO(HttpStatus.OK, 'Success on list publications', []);
  }
}
