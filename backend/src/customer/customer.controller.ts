import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { LoginDto } from './customer.dto';
@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post('/login')
  async login(@Body() data: LoginDto) {
    const { cno, passwd } = data;
    if (await this.customerService.checkUser({ cno, passwd })) {
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
