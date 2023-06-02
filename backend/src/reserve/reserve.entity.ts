import { Customer } from '@src/customer/customer.entity';
import { RentCar } from '@src/rentcar/rentcar.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Reserve {
  @PrimaryColumn()
  licensePlateNo: string;

  @PrimaryColumn()
  startDate: Date;

  @Column({ type: 'date', nullable: false })
  reserveDate: Date;

  @Column({ type: 'date', nullable: false })
  endDate: Date;

  @Column({ type: 'string' })
  cno: string;

  @ManyToOne(() => Customer, (customer) => customer.rentCars)
  @JoinColumn({ name: 'cno' })
  customer: Customer;

  @ManyToOne(() => RentCar, (rentCar) => rentCar.reserves)
  @JoinColumn({ name: 'licensePlateNo' })
  rentCar: RentCar;
}
