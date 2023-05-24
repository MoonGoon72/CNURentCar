import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('customer')
export class Customer extends BaseEntity {
  @PrimaryColumn()
  cno!: string;

  @Column()
  name!: string;

  @Column()
  passwd!: string;

  @Column()
  email!: string;
}
