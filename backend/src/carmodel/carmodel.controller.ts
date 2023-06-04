// car.controller.ts

import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarModelService } from './carmodel.service';
import { CarModelDto } from './carmodel.dto';

@ApiTags('cars')
@Controller('cars')
export class CarModelController {
  constructor(private readonly carModelService: CarModelService) {}
  @Post('/search')
  @ApiBody({ type: CarModelDto })
  @ApiResponse({
    status: 200,
    description: 'search state',
    schema: {
      example: { status: 'search success' },
    },
  })
  async searchCarModel(@Body() carSearchDto: CarModelDto) {
    return this.carModelService.findCarModeData(carSearchDto);
  }
}
