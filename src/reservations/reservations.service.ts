// src/reservations/reservations.service.ts

import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationsService {
  private reservations = [];  // In-memory storage for reservations

  // Create a new reservation
  create(createReservationDto: CreateReservationDto) {
    const newReservation = {
      id: this.reservations.length + 1,
      ...createReservationDto,
    };
    this.reservations.push(newReservation);
    return newReservation;
  }

  // Get all reservations
  findAll() {
    return this.reservations;
  }

  // Get a single reservation by ID
  findOne(id: number) {
    return this.reservations.find(reservation => reservation.id === id);
  }

  // Update a reservation by ID
  update(id: number, updateReservationDto: CreateReservationDto) {
    const reservation = this.findOne(id);
    if (reservation) {
      Object.assign(reservation, updateReservationDto);
      return reservation;
    }
    return null;
  }

  // Delete a reservation by ID
  remove(id: number) {
    const index = this.reservations.findIndex(reservation => reservation.id === id);
    if (index !== -1) {
      this.reservations.splice(index, 1);
      return { message: `Reservation #${id} deleted successfully.` };
    }
    return { message: `Reservation not found.` };
  }
}
