import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RentCar } from './rentcar.entity';
import { RentCarDto } from './rentcar.dto';
import { ReserveDto } from '@src/reserve/reserve.dto';

interface RentCarSearchProps {
  licensePlateNo: string;
  startDate: Date;
  endDate: Date;
  cno: string;
}
@Injectable()
export class RentCarService {
  constructor(
    @InjectRepository(RentCar)
    private rentCarRepository: Repository<RentCar>,
  ) {}
  async findAvailableCars(searchDto: RentCarDto): Promise<RentCar[]> {
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

  async updateRentCar(newReserve: Partial<ReserveDto>) {
    const { licensePlateNo, startDate, endDate, cno } = newReserve;
    const asset = await this.rentCarRepository.findOne({
      where: { licensePlateNo: licensePlateNo },
    });
    asset.dateRented = startDate;
    asset.dateDue = endDate;
    asset.cno = cno;
    await this.rentCarRepository.save(asset);
    return asset;
  }

  async findModelNameByLicensePlateNo({
    startDate,
    endDate,
    licensePlateNo,
    cno,
  }: RentCarSearchProps) {
    const rentCar = await this.rentCarRepository.findOne({
      where: {
        licensePlateNo: licensePlateNo,
        dateRented: startDate,
        dateDue: endDate,
        cno: cno,
      },
    });
    return rentCar?.modelName;
  }
}
