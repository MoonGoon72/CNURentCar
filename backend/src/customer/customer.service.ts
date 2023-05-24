import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {
    this.customerRepository = customerRepository;
  }

  async checkUser({ cno, passwd }: Partial<Customer>) {
    const user = await this.customerRepository.findOneBy({ cno, passwd });
    console.log('user', user, cno, passwd, typeof user);
    if (user) return true;
    return false;
  }
}
