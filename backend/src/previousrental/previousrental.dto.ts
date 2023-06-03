import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDateString, IsString, IsNumber } from 'class-validator';

export class PreviousRentalDto {
  @ApiProperty({
    example: '45허 4567',
    description: 'License plate number of the car',
  })
  @IsNotEmpty()
  @IsString()
  licensePlateNo: string;

  @ApiProperty({
    example: '2023-05-10',
    description: 'Start date of the reservation',
  })
  @IsNotEmpty()
  @IsDateString()
  startDate: Date;

  @ApiProperty({
    example: '2023-05-13',
    description: 'End date of the reservation',
  })
  @IsNotEmpty()
  @IsDateString()
  endDate: Date;
  @ApiProperty({
    example: '2023-05-13',
    description: 'End date of the reservation',
  })
  @IsNotEmpty()
  @IsNumber()
  payment: number;
  @ApiProperty({
    example: 'kim01',
    description: '아이디 입력',
  })
  @IsNotEmpty()
  @IsString()
  cno: string;
}
