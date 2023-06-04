import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RentCarService } from './rentcar.service';
import { RentCarDto } from './rentcar.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('rentcar')
export class RentCarController {
  constructor(private readonly rentCarService: RentCarService) {}

  @Post('/search')
  @ApiBody({ type: RentCarDto })
  @ApiResponse({
    status: 200,
    description: 'search state',
    schema: {
      example: { status: 'search success' },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input',
  })
  async searchCars(@Body() carSearchDto: RentCarDto) {
    return this.rentCarService.findAvailableCars(carSearchDto);
  }
}
