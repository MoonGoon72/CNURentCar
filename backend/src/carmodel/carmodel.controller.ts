// car.controller.ts

import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarModelService } from './carmodel.service';
import { CarModelDto } from './carmodel.dto';

@ApiTags('cars')
@Controller('cars')
export class CarModelController {
  constructor(private readonly carModelService: CarModelService) {}

  // Other API endpoints here

  @Get('/search')
  @ApiOperation({ summary: 'Search available cars' })
  @ApiResponse({
    status: 200,
    description: 'The list of available cars',
    type: [CarModelDto],
  })
  async search(
    @Query('vehicleType') vehicleType: string,
    @Query('startDate') startDateString: string,
    @Query('endDate') endDateString: string,
  ): Promise<CarModelDto[]> {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    const availableCars = await this.carModelService.findAvailableCars({
      vehicleType,
      startDate,
      endDate,
    });
    return availableCars;
  }
}
