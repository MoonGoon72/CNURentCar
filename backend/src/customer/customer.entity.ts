import { RentCar } from '@src/rentcar/rentcar.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

// nest가 시작할 때 Customer 테이블을 만들어 주는 부분
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
