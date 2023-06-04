import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Reserve } from './reserve.entity';
import { ReserveDto } from './reserve.dto';
import { PreviousRentalService } from '@src/previousrental 02-23-26-933/previousrental.service';
import { CarModelService } from '@src/carmodel/carmodel.service';
import { RentCarService } from '@src/rentcar/rentcar.service';

interface ReserveProps {
  licensePlateNo: string;
  startDate: Date;
  endDate: Date;
  cno: string;
}

@Injectable()
export class ReserveService {
  constructor(
    @InjectRepository(Reserve)
    private reserveRepository: Repository<Reserve>,
    private previousRentalService: PreviousRentalService,
    private carModelService: CarModelService,
    private rentCarService: RentCarService,
  ) {}

  async createReserve({
    licensePlateNo,
    startDate,
    endDate,
    cno,
  }: ReserveProps): Promise<Reserve> {
    // console.log(licensePlateNo, startDate, endDate, cno);
    // console.log(this.reserveRepository);
    const createdReserve = await this.reserveRepository.create({
      licensePlateNo,
      startDate,
      reserveDate: new Date(),
      endDate,
      cno,
    });
    // console.log('CreatedReserve####################');
    // console.log(createdReserve);
    return this.reserveRepository.save(createdReserve);
  }
  // 회원이 렌트된 차량을 선택하면 찾아서 반납하도록함, 반납시에 삭제된 엔티티를 반환하여 이전 대여 기록에 넣을 수 있도록 함
  async deleteReserve({
    licensePlateNo,
    startDate,
    endDate,
    cno,
  }: ReserveProps): Promise<Reserve | DeleteResult> {
    // const { licensePlateNo, startDate, endDate, cno } = returnReserveDto;
    const returnResult = await this.reserveRepository.findOne({
      where: {
        licensePlateNo: licensePlateNo,
        startDate: startDate,
        endDate: endDate,
        cno: cno,
      },
    });

    // console.log('ReturnResult');
    // console.log(returnResult);
    if (returnResult) {
      const deletedReserve: Reserve = { ...returnResult };
      const deleteReserve = await this.reserveRepository.remove(returnResult);
      // console.log('deleteReserve#############################');
      // console.log(deletedReserve);

      const modelName = await this.rentCarService.findModelNameByLicensePlateNo(
        deletedReserve,
      );

      const rentRatePerDay = await this.carModelService.findRentRatePerDay({
        modelName: modelName,
      });

      await this.previousRentalService.updatePreviousRental({
        licensePlateNo: deletedReserve.licensePlateNo,
        startDate: deletedReserve.startDate,
        endDate: deletedReserve.endDate,
        cno: deletedReserve.cno,
        rentRatePerDay: rentRatePerDay,
      });
      return deleteReserve;
    }
    return null;
  }
}
