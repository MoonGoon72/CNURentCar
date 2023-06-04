import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarModel } from './carmodel.entity';
import { Reserve } from '@src/reserve/reserve.entity';
import { RentCar } from '@src/rentcar/rentcar.entity';

interface carModelSearchProps {
  modelName: string;
}

interface findAvailableCarsProps {
  vehicleType: string;
  startDate: Date;
  endDate: Date;
}

@Injectable()
export class CarModelService {
  constructor(
    @InjectRepository(CarModel)
    private carModelRepository: Repository<CarModel>,
    @InjectRepository(RentCar)
    private rentCarRepository: Repository<RentCar>,
    @InjectRepository(Reserve)
    private reserveRepository: Repository<Reserve>,
  ) {}

  async findRentRatePerDay({ modelName }: carModelSearchProps) {
    const carModel = await this.carModelRepository.findOne({
      where: { modelName },
    });
    return carModel.rentRatePerDay;
  }

  async findCarModeData({ modelName }: carModelSearchProps) {
    const carModel = await this.carModelRepository.findOne({
      where: { modelName },
    });
    return carModel;
  }
}
