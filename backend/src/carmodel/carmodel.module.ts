import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModel } from './carmodel.entity';
import { CarModelService } from './carmodel.service';
import { CarModelController } from './carmodel.controller';
import { ReserveService } from '@src/reserve/reserve.service';
import { RentCarService } from '@src/rentcar/rentcar.service';
import { ReserveModule } from '@src/reserve/reserve.module';
import { RentcarModule } from '@src/rentcar/rentcar.module';
import { Repository } from 'typeorm';
import { Reserve } from '@src/reserve/reserve.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CarModel, Reserve, Repository<Reserve>]),
    ReserveModule,
    RentcarModule,
  ],
  // providers: [CarModelService, ReserveService, RentCarService],
  // controllers: [CarModelController],
  // exports: [CarModelService],
})
export class CarmodelModule {}
