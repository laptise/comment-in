import { Column, Entity, PrimaryColumn } from 'typeorm';
import { User as IF } from '@entities/user';

@Entity()
export class User implements IF {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  email: string;
}
