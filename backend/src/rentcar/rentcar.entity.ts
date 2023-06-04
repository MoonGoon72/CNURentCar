import { CarModel } from '@src/carmodel/carmodel.entity';
import { Customer } from '@src/customer/customer.entity';
import { Options } from '@src/options/options.entity';
import { PreviousRental } from '@src/previousrental 02-23-26-933/previousrental.entity';
import { Reserve } from '@src/reserve/reserve.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class RentCar {
  @PrimaryColumn()
  licensePlateNo: string;

  @ManyToOne(() => CarModel, (carModel) => carModel.rentCars)
  @JoinColumn({ name: 'modelName' })
  carModel: CarModel;

  @Column({ type: 'string', nullable: true })
  modelName: string;
  @Column({ type: 'date', nullable: true })
  dateRented: Date;

  @Column({ type: 'date', nullable: true })
  dateDue: Date;

  @Column({ nullable: true })
  cno: string;

  @ManyToOne(() => Customer, (customer) => customer.rentCars)
  @JoinColumn({ name: 'cno' })
  customer: Customer;

  @OneToMany(() => Options, (options) => options.rentCar)
  options: Options[];

  @OneToMany(() => Reserve, (reserve) => reserve.rentCar)
  reserves: Reserve[];

  @OneToMany(() => PreviousRental, (previousRental) => previousRental.rentCar)
  previousRentals: PreviousRental[];
}
