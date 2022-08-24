import { PrimaryColumn, Column, CreateDateColumn, Entity, Timestamp } from 'typeorm';

@Entity()
export class Movies {
  @PrimaryColumn('uuid')
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

  @CreateDateColumn({default: 'now()'})
  createdAt: Timestamp;
}
