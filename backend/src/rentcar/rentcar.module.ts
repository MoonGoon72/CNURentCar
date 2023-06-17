import { Module } from '@nestjs/common';
import { RentCarService } from './rentcar.service';
import { RentCarController } from './rentcar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentCar } from './rentcar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RentCar])],
  controllers: [RentCarController],
  providers: [RentCarService],
  exports: [RentCarService],
})
export class RentcarModule {}
