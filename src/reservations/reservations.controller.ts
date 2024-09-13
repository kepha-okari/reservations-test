import { Controller, Get, Post, Body, Param, HttpStatus, HttpException } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  // POST /reservations - Create a new reservation
  @Post()
  async create(@Body() createReservationDto: CreateReservationDto) {
    const newReservation = await this.reservationsService.create(createReservationDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Reservation created successfully',
      data: newReservation,
    };
  }

  // GET /reservations - Get all reservations
  @Get()
  async findAll() {
    const reservations = await this.reservationsService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Reservations fetched successfully',
      data: reservations,
    };
  }

  // GET /reservations/:id - Get a reservation by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const reservation = await this.reservationsService.findOne(+id);
    if (!reservation) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          message: `Reservation with ID ${id} not found`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'Reservation fetched successfully',
      data: reservation,
    };
  }

  // POST /reservations/update/:id - Update a reservation
  @Post('update/:id')
  async update(@Param('id') id: string, @Body() updateReservationDto: CreateReservationDto) {
    const updatedReservation = await this.reservationsService.update(+id, updateReservationDto);
    if (!updatedReservation) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          message: `Reservation with ID ${id} not found`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'Reservation updated successfully',
      data: updatedReservation,
    };
  }

  // POST /reservations/delete/:id - Delete a reservation
  @Post('delete/:id')
  async remove(@Param('id') id: string) {
    const deleteResponse = await this.reservationsService.remove(+id);
    if (deleteResponse.affected === 0) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          message: `Reservation with ID ${id} not found`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      statusCode: HttpStatus.OK,
      message: `Reservation with ID ${id} deleted successfully`,
    };
  }
}
