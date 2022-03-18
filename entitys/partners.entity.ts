import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
@Entity()
export class Partners {
  @PrimaryColumn('char', { length: 16 })
  uuid: string;

  @Column('varchar', { length: 48, unique: true })
  company_name: string;

  @Column('varchar', { length: 21 })
  name: string;

  @Column('varchar', { length: 45, unique: true })
  email: string;

  @Column('char', { length: 255 })
  password: string;

  @Column('char', { length: 10, unique: true })
  business_number: number;

  @Column('varchar', { length: 12, unique: true })
  phone: string;

  @Column('varchar', { length: 100 })
  address: string;

  @Column('varchar', { length: 70 })
  detail_address: string;

  @CreateDateColumn()
  created_at: Date;
}
