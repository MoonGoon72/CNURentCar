import { Module } from '@nestjs/common';
import { RentCarService } from './rentcar.service';
import { RentCarController } from './rentcar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentCar } from './rentcar.entity';
import { CarModel } from '@src/carmodel/carmodel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RentCar, CarModel])],
  controllers: [RentCarController],
  providers: [RentCarService],
})
export class RentcarModule {}
