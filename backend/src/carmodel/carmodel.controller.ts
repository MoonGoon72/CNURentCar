// car.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarModelService } from './carmodel.service';
import { CarModelDto } from './carmodel.dto';

@ApiTags('carModel')
@Controller('carModel')
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
    return this.carModelService.findCarModelData(carSearchDto);
  }
}
