import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserve } from './reserve.entity';
import { ReserveController } from './reserve.controller';
import { ReserveService } from './reserve.service';
import { RentCar } from '@src/rentcar/rentcar.entity';
import { RentCarService } from '@src/rentcar/rentcar.service';
import { PreviousRental } from '@src/previousrental 02-23-26-933/previousrental.entity';
import { PreviousRentalService } from '@src/previousrental 02-23-26-933/previousrental.service';
import { CarModel } from '@src/carmodel/carmodel.entity';
import { RentCarController } from '@src/rentcar/rentcar.controller';
import { CarModelService } from '@src/carmodel/carmodel.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reserve, CarModel, RentCar, PreviousRental]),
  ],
  providers: [
    ReserveService,
    RentCarService,
    PreviousRentalService,
    CarModelService,
  ],
  controllers: [ReserveController, RentCarController],
  exports: [ReserveService],
})
export class ReserveModule {}
