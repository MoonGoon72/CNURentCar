import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreviousRental } from './previousrental.entity';
import { PreviousRentalService } from './previousrental.service';
import { CarModel } from '@src/carmodel/carmodel.entity';
import { RentCar } from '@src/rentcar/rentcar.entity';
import { CarModelService } from '@src/carmodel/carmodel.service';
import { RentCarService } from '@src/rentcar/rentcar.service';
import { Reserve } from '@src/reserve/reserve.entity';
import { Repository } from 'typeorm';
import { previousRentalController } from './previousrental.controller';
import { CarmodelModule } from '@src/carmodel/carmodel.module';
import { RentcarModule } from '@src/rentcar/rentcar.module';
import { ReserveModule } from '@src/reserve/reserve.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PreviousRental, CarModel, RentCar, Reserve]),
    Repository<CarModel>,
    CarmodelModule,
    RentcarModule,
    ReserveModule,
  ],
  // controllers: [previousRentalController],
  // providers: [PreviousRentalService, CarModelService, RentCarService, Reserve],
  // exports: [PreviousRentalService],
})
export class PreviousrentalModule {}
