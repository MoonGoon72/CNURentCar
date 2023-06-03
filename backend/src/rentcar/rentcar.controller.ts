import { Controller, Get, Query } from '@nestjs/common';
import { RentCarService } from './rentcar.service';
import { RentCarDto } from './rentcar.dto';

@Controller('rentcar')
export class RentCarController {
  constructor(private readonly rentCarService: RentCarService) {}

  @Get('/search')
  searchCars(@Query() carSearchDto: RentCarDto) {
    return this.rentCarService.findAvailableCars(carSearchDto);
  }
}
