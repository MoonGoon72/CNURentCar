import { RentCar } from '@src/rentcar/rentcar.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('customer')
export class Customer extends BaseEntity {
  @PrimaryColumn()
  cno!: string;

  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: false })
  passwd!: string;

  @Column({ nullable: false })
  email!: string;

  @OneToMany(() => RentCar, (rentCar) => rentCar.customer)
  rentCars: RentCar[];
}
