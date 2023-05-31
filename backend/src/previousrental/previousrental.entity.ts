import { Customer } from '@src/customer/customer.entity';
import { RentCar } from '@src/rentcar/rentcar.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class PreviousRental {
  @PrimaryColumn()
  licensePlateNo: string;

  @Column({ type: 'date', nullable: false })
  dateRented: Date;

  @Column({ type: 'date', nullable: false })
  dateReturned: Date;

  @Column({ type: 'int', nullable: false })
  payment: number;

  @ManyToOne(() => Customer, (customer) => customer.rentCars)
  @JoinColumn({ name: 'cno' })
  customer: Customer;

  @ManyToOne(() => RentCar, (rentCar) => rentCar.previousRentals)
  @JoinColumn({ name: 'licensePlateNo' })
  rentCar: RentCar;
}
