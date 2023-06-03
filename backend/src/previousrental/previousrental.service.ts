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
  async updatePreviousRental({
    licensePlateNo,
    rentRatePerDay,
    startDate,
    endDate,
    cno,
  }: UpdateProps) {
    const durationInDays = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    );
    const payment = rentRatePerDay * durationInDays;
    const updatePreviousRental = await this.previousRentalRepository.create({
      licensePlateNo: licensePlateNo,
      payment: payment,
      dateRented: startDate,
      dateReturned: endDate,
      cno: cno,
    });

    return updatePreviousRental;
  }
}
