import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RentCar } from './rentcar.entity';
import { CarSearchDto } from './rentcar.dto';

@Injectable()
export class RentCarService {
  constructor(
    @InjectRepository(RentCar)
    private rentCarRepository: Repository<RentCar>,
  ) {}
  async findAvailableCars(searchDto: CarSearchDto): Promise<RentCar[]> {
    const { startDate, endDate, vehicleTypes } = searchDto;

    const vehicleTypeArray =
      typeof vehicleTypes === 'string' ? [vehicleTypes] : vehicleTypes;

    const rentCars =
      vehicleTypeArray[0] !== '전체'
        ? await this.rentCarRepository
            .createQueryBuilder('rent_car')
            .innerJoin('rent_car.carModel', 'car_model')
            .where('car_model.vehicleType IN (:...vehicleTypeArray)', {
              vehicleTypeArray,
            })
            .getMany()
        : await this.rentCarRepository
            .createQueryBuilder('rent_car')
            .innerJoin('rent_car.carModel', 'car_model')

            .getMany();
    return rentCars.filter(
      (rentCar) =>
        rentCar.dateRented == null ||
        rentCar.dateRented > endDate ||
        rentCar.dateDue < startDate,
    );
  }

  // async findAvailableCars(searchDto: CarSearchDto): Promise<RentCar[]> {
  //   const { startDate, endDate, vehicleTypes } = searchDto;

  //   const queryBuilder = this.rentCarRepository
  //     .createQueryBuilder('rentCar')
  //     .innerJoinAndSelect('rentCar.carModel', 'carModel')
  //     .andWhere(
  //       '((rentCar.dateRented >= :endDate AND rentCar.dateDue >= :endDate) OR (rentCar.dateRented <= :startDate AND rentCar.dateDue <= :startDate)) OR rentCar.dateRented IS NULL',
  //       { startDate, endDate },
  //     );

  //   if (vehicleTypes) {
  //     if (Array.isArray(vehicleTypes)) {
  //       queryBuilder.andWhere('carModel.vehicleType IN (:...vehicleTypes)', {
  //         vehicleTypes,
  //       });
  //     } else if (vehicleTypes !== '전체') {
  //       queryBuilder.andWhere('carModel.vehicleType = :vehicleType', {
  //         vehicleType: vehicleTypes,
  //       });
  //     }
  //   }

  //   const cars = await queryBuilder.getMany();
  //   return cars;
  // }

  //   async findAvailableCars(searchDto: CarSearchDto): Promise<RentCar[]> {
  //     const { startDate, endDate, vehicleTypes } = searchDto;

  //     let queryBuilder = this.rentCarRepository
  //       .createQueryBuilder('rentCar')
  //       .leftJoinAndSelect('rentCar.carModel', 'carModel')
  //       .where('rentCar.dateRented IS NULL');

  //     if (startDate && endDate) {
  //       queryBuilder = queryBuilder.andWhere(
  //         '(rentCar.dateRented <= :startDate AND rentCar.dateRented <= :endDate) OR (rentCar.dateDue <= :startDate AND rentCar.dateDue <= :endDate) OR rentCar.dateRented IS NULL',
  //         { startDate, endDate },
  //       );
  //     }

  //     if (vehicleTypes) {
  //       if (Array.isArray(vehicleTypes)) {
  //         queryBuilder = queryBuilder.andWhere(
  //           'carModel.vehicleType IN (:...vehicleTypes)',
  //           { vehicleTypes },
  //         );
  //       } else if (vehicleTypes !== '전체') {
  //         console.log(Array.isArray(vehicleTypes));
  //         console.log(vehicleTypes);
  //         queryBuilder = queryBuilder.andWhere(
  //           'carModel.vehicleType = :vehicleType',
  //           { vehicleType: vehicleTypes },
  //         );
  //       }
  //     }

  //     const cars = await queryBuilder.getMany();
  //     return cars;
  //   }
}
