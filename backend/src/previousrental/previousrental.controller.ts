import { Controller, Get } from '@nestjs/common';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PreviousRentalService } from './previousrental.service';
@ApiTags('Previous Rental')
@Controller('previous_rent_car')
export class previousRentalController {
  constructor(private previousRentalService: PreviousRentalService) {}
  @Get('/previousRental')
  @ApiResponse({
    status: 200,
    description: 'previousRental state',
    schema: {
      example: { status: 'get previousRental success' },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'error occurs while execute get previousRental',
  })
  async getAllPreviousRental() {
    const listOfPreviousRental =
      await this.previousRentalService.getPreviousRental();
    console.log(listOfPreviousRental);
    console.log('0000000');
    return listOfPreviousRental;
  }
}
