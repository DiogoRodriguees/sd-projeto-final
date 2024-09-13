import { Controller, Post, Get, Body, Req, UseGuards, HttpStatus } from '@nestjs/common';
import { InterestService } from 'src/services/InterestService';
import { Request } from 'src/shared/dtos/Request';
import { AuthGuard } from 'src/shared/guards/AuthGuard';
import { ResponseDTO } from 'src/shared/dtos/Response';

@Controller('/interests')
export class InterestController {
  constructor(private readonly interestService: InterestService) {}

  // Endpoint to mark a new interest
  @Post()
  @UseGuards(AuthGuard)
  async markInterest(@Req() req: Request, @Body('autorId') autorId: number) {
    const interest = await this.interestService.markInterest(req.user.id, autorId);
    return new ResponseDTO(HttpStatus.OK, 'Successfully marked interest', interest);
  }

  // Endpoint to get the list of interests
  @Get()
  @UseGuards(AuthGuard)
  async getInterests(@Req() req: Request) {
    const interests = await this.interestService.getInterestsByUserId(req.user.id);
    return new ResponseDTO(HttpStatus.OK, 'Successfully retrieved interests', interests);
  }
}
