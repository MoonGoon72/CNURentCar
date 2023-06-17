import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreviousRental } from './previousrental.entity';
import { PreviousRentalService } from './previousrental.service';
import { previousRentalController } from './previousrental.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PreviousRental])],
  // previousRental 의존성이 문제임
  controllers: [previousRentalController],
  providers: [PreviousRentalService],
  exports: [PreviousRentalService],
})
export class PreviousrentalModule {}
