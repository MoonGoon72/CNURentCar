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

  // Other service methods here

  async findAvailableCars({
    vehicleType,
    startDate,
    endDate,
  }: findAvailableCarsProps): Promise<CarModel[]> {
    // Find all cars of the given vehicleType
    const allCars = await this.carModelRepository.find({
      where: { vehicleType },
    });

    // Find all cars that are already reserved in the given period
    const reservedCars = await this.reserveRepository
      .createQueryBuilder('reserve')
      .where(
        'reserve.startDate <= :endDate AND reserve.endDate >= :startDate',
        { startDate, endDate },
      )
      .getMany();

    // Filter out the reserved cars from all cars
    const availableCars = allCars.filter(
      (car) =>
        !reservedCars.some(
          (reservedCar) => reservedCar.licensePlateNo === car.modelName,
        ),
    );

    return availableCars;
  }

  async findRentRatePerDay({ modelName }: carModelSearchProps) {
    const carModel = await this.carModelRepository.findOne({
      where: { modelName },
    });
    return carModel.rentRatePerDay;
  }
}
