// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationsModule } from './reservations/reservations.module';
import { Reservation } from './reservations/entities/reservation.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root', // Use your MySQL username
      password: '!23qweASD', // Use your MySQL password
      database: 'hotel_reservations', // Create this database in MySQL
      entities: [Reservation], // Register entities here
      synchronize: true, // Automatically sync database schema (for development only)
    }),
    ReservationsModule,
  ],
})
export class AppModule {}
