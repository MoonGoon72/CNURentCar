import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class RentCarDto {
  @ApiProperty({
    description: '대여 시작 날짜',
    type: 'string',
    format: 'date',
  })
  @IsNotEmpty()
  startDate: Date;

  @ApiProperty({
    description: '대여 종료 날짜',
    type: 'string',
    format: 'date',
  })
  @IsNotEmpty()
  endDate: Date;

  @ApiProperty({
    description: '선택한 차종',
    type: 'array',
    items: { type: 'string' },
    required: false,
  })
  @IsOptional()
  vehicleTypes?: string[];
}
