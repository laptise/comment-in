import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Commentee {
  @PrimaryGeneratedColumn()
  id: number;
}
