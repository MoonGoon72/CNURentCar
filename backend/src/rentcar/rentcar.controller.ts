import { Controller, Get, Query } from '@nestjs/common';
import { RentCarService } from './rentcar.service';
import { CarSearchDto } from './rentcar.dto';

@Controller('rentcar')
export class RentCarController {
  constructor(private readonly rentCarService: RentCarService) {}

  @Get('/search')
  searchCars(@Query() carSearchDto: CarSearchDto) {
    return this.rentCarService.findAvailableCars(carSearchDto);
  }
}
