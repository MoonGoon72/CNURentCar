import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserve } from './reserve.entity';
import { ReserveDto } from './reserve.dto';

@Injectable()
export class ReserveService {
  constructor(
    @InjectRepository(Reserve)
    private reserveRepository: Repository<Reserve>,
  ) {
    this.reserveRepository = reserveRepository;
  }
  async createReserve(createReserveDto: ReserveDto): Promise<Reserve> {
    const { licensePlateNo, startDate, endDate, cno } = createReserveDto;
    console.log(licensePlateNo, startDate, endDate, cno);
    console.log(this.reserveRepository);
    const createdReserve = await this.reserveRepository.create({
      licensePlateNo,
      startDate,
      reserveDate: new Date(),
      endDate,
      cno,
    });

    return this.reserveRepository.save(createdReserve);
  }
}
