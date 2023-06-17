import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarModel } from './carmodel.entity';

interface carModelSearchProps {
  modelName: string;
}

@Injectable()
export class CarModelService {
  constructor(
    @InjectRepository(CarModel)
    private carModelRepository: Repository<CarModel>,
  ) {}

  async findRentRatePerDay({ modelName }: carModelSearchProps) {
    const carModel = await this.carModelRepository.findOne({
      where: { modelName },
    });
    return carModel.rentRatePerDay;
  }

  async findCarModelData({ modelName }: carModelSearchProps) {
    const carModel = await this.carModelRepository.findOne({
      where: { modelName },
    });
    return carModel;
  }
}
