import { PrimaryColumn, Column, CreateDateColumn, Entity } from 'typeorm';

@Entity()
export class Movies {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column('date')
  premiere_date: string;

  @Column('text')
  description: string;

  @Column('int')
  duration: number;

  @CreateDateColumn()
  createdAt: Date;
}
