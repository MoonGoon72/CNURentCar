import { CarModel } from '@src/carmodel/carmodel.entity';
import { Customer } from '@src/customer/customer.entity';
import { Options } from '@src/options/options.entity';
import { PreviousRental } from '@src/previousrental/previousrental.entity';
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

  @Column({ type: 'date', nullable: true })
  dateRented: Date;

  @Column({ type: 'date', nullable: true })
  dateDue: Date;

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
