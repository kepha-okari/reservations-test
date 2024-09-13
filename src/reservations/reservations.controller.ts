// src/reservations/reservations.controller.ts

import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  // POST /reservations - Create a new reservation
  @Post()
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.create(createReservationDto);
  }

  // GET /reservations - Get all reservations
  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  // GET /reservations/:id - Get a reservation by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(+id);
  }

  // PATCH /reservations/:id - Update a reservation by ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservationDto: CreateReservationDto) {
    return this.reservationsService.update(+id, updateReservationDto);
  }

  // DELETE /reservations/:id - Delete a reservation by ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationsService.remove(+id);
  }
}
