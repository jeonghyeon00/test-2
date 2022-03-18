import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Production {
  @PrimaryGeneratedColumn()
  uuid: string;

  @Column({ length: 18 })
  status: string;

  @Column('char', { length: 12, default: '', unique: true /* 22-01260001 */ })
  production_number: string;

  @Column({ length: 100 })
  address: string;

  @Column()
  first_price: number;

  @Column()
  second_price: number;

  @Column()
  last_price: number;

  @Column()
  overall_price: number;

  @Column({ precision: 1 })
  vat_status: boolean;

  @Column()
  vat_price: number;

  @Column()
  fee: number;

  @Column({ precision: 1 })
  payment_status: boolean;
}
