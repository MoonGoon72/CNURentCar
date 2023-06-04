import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PreviousRental } from './previousrental.entity';
import { Repository } from 'typeorm';

interface UpdateProps {
  licensePlateNo: string;
  rentRatePerDay: number;
  startDate: Date;
  endDate: Date;
  cno: string;
}

@Injectable()
export class PreviousRentalService {
  constructor(
    @InjectRepository(PreviousRental)
    private previousRentalRepository: Repository<PreviousRental>,
  ) {
    this.previousRentalRepository = previousRentalRepository;
  }

  // select * from previousRental
  async getPreviousRental(): Promise<PreviousRental[]> {
    const previousRentals = await this.previousRentalRepository.find();
    console.log(previousRentals);
    console.log('=================');
    return previousRentals;
  }

  async updatePreviousRental({
    licensePlateNo,
    rentRatePerDay,
    startDate,
    endDate,
    cno,
  }: UpdateProps) {
    console.log(typeof endDate, endDate);
    console.log(typeof startDate, startDate);
    const newEndDate = new Date(endDate);
    const newStartDate = new Date(startDate);
    const durationInDays = Math.ceil(
      (newEndDate.getTime() - newStartDate.getTime()) / (1000 * 60 * 60 * 24),
    );
    const payment = rentRatePerDay * durationInDays;
    const updatePreviousRental = await this.previousRentalRepository.create({
      licensePlateNo: licensePlateNo,
      payment: payment,
      dateRented: startDate,
      dateReturned: endDate,
      cno: cno,
    });
    await this.previousRentalRepository.save(updatePreviousRental);
    return updatePreviousRental;
  }
}
