import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { LoginDto } from './customer.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}
  // Swagger 부분
  @Post('/login')
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 200,
    description: 'The login status',
    schema: {
      example: { status: 'success' },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input',
  })
  // cno와 passwd를 받아서 customerService의 validateCustomer 함수에 인자를 집어넣어서 결과값을 통해 로그인 여부를 판단한다.
  async login(@Body() loginDto: LoginDto) {
    const { cno, passwd } = loginDto;
    const isVaild = await this.customerService.validateCustomer(cno, passwd);
    if (isVaild) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
      };
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'NO',
    };
  }
}
