import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}
  // findOne 함수를 통해서 customer 테이블에 cno와 passwd가 유저가 입력한 정보와 같은지 판단하여 그에따른 참 거짓 값 리턴
  async validateCustomer(cno: string, passwd: string): Promise<boolean> {
    const customer = await this.customerRepository.findOne({ where: { cno } });
    if (customer && customer.passwd === passwd) {
      return true;
    }
    return false;
  }

  async getCustomerInfo(cno: string, passwd: string): Promise<Customer> {
    const customer = await this.customerRepository.findOne({ where: { cno } });
    if (customer && customer.passwd === passwd) {
      return customer;
    }
    return null;
  }
}
