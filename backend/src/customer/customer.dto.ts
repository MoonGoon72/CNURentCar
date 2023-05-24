import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: 'cno' })
  @IsString()
  cno: string;

  @ApiProperty({ description: 'password 비밀번호' })
  @IsString()
  passwd: string;
}
