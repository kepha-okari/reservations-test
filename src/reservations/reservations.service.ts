import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private reservationsRepository: Repository<Reservation>,
  ) {}

  // Create a new reservation
  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const newReservation = this.reservationsRepository.create(createReservationDto);
    return this.reservationsRepository.save(newReservation);
  }

  // Get all reservations
  async findAll(): Promise<Reservation[]> {
    return this.reservationsRepository.find();
  }

  // Get a single reservation by ID
  async findOne(id: number): Promise<Reservation | null> {
    return this.reservationsRepository.findOneBy({ id });
  }

  // Update a reservation by ID
  async update(id: number, updateReservationDto: CreateReservationDto): Promise<Reservation | null> {
    const reservation = await this.findOne(id);
    if (!reservation) {
      return null;
    }
    Object.assign(reservation, updateReservationDto);
    return this.reservationsRepository.save(reservation);
  }

  // Delete a reservation by ID
  async remove(id: number): Promise<DeleteResult> {
    return this.reservationsRepository.delete(id);
  }
}
