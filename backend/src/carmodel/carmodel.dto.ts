import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

// Swagger를 사용하기 위한 부분
export class CarModelDto {
  @ApiProperty({
    example: '마티즈',
    description: 'The name of the car model',
  })
  @IsString()
  modelName: string;
  // @ApiProperty({
  //   example: '소형',
  //   description: 'The name of the car model',
  // })
  // @IsString()
  // vehicleType: string;
  // @ApiProperty({
  //   example: 100000,
  //   description: 'The name of the car model',
  // })
  // @IsNumber()
  // rentRatePerDay: number;
  // @ApiProperty({
  //   example: '가솔린',
  //   description: 'The name of the car model',
  // })
  // @IsString()
  // fuel: string;
  // @ApiProperty({
  //   example: 5,
  //   description: 'The name of the car model',
  // })
  // @IsNumber()
  // numberOfSeats: number;
}
