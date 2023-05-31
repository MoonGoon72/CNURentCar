import { RentCar } from '@src/rentcar/rentcar.entity';
import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class CarModel {
  @PrimaryColumn()
  modelName: string;

  @Column({ nullable: false })
  vehicleType: string;

  @Column({ type: 'int', nullable: false })
  rentRatePerDay: number;

  @Column({ nullable: false })
  fuel: string;

  @Column({ type: 'int', nullable: false })
  numberOfSeats: number;

  @OneToMany(() => RentCar, (rentCar) => rentCar.carModel)
  rentCars: RentCar[];
}
