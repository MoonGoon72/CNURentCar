import { Controller, Get, Query } from '@nestjs/common';
import { Reserve } from '@src/reserve/reserve.entity';
import { Repository } from 'typeorm';
import { PreviousRental } from './previousrental.entity';

@Controller('previous_rent_car')
export class previousRentalController {
  constructor(
    private reserveRepository: Repository<Reserve>,
    private previousRentalRepository: Repository<PreviousRental>,
  ) {}
}
