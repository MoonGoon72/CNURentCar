import { ApiProperty } from '@nestjs/swagger';
// Swagger를 사용하기 위해 구현한 부분
export class LoginDto {
  @ApiProperty({
    description: 'The customer number',
    example: 'C12345',
  })
  cno: string;

  @ApiProperty({
    description: 'The password of the customer',
    example: 'mypassword',
  })
  passwd: string;
}
