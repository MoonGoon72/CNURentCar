import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserve } from './reserve.entity';
import { ReserveController } from './reserve.controller';
import { ReserveService } from './reserve.service';
import { RentCar } from '@src/rentcar/rentcar.entity';
import { RentCarService } from '@src/rentcar/rentcar.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reserve]),
    TypeOrmModule.forFeature([RentCar]),
  ],
  controllers: [ReserveController],
  providers: [ReserveService, RentCarService],
})
export class ReserveModule {}
