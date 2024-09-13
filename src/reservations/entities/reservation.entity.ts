import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  guestName: string;

  @Column()
  roomNumber: number;

  @Column({ type: 'date' })
  checkInDate: string;

  @Column({ type: 'date' })
  checkOutDate: string;
}
