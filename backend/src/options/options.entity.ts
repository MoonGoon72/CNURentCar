import { RentCar } from '@src/rentcar/rentcar.entity';
import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Options {
  @PrimaryColumn()
  licensePlateNo: string;

  @PrimaryColumn()
  optionName: string;

  @ManyToOne(() => RentCar, (rentCar) => rentCar.options)
  @JoinColumn({ name: 'licensePlateNo' })
  rentCar: RentCar;
}
