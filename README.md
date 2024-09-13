Sure! Below is an updated **README** file with **copy-paste ready** sample API requests for all the endpoints.

---

# Reservations App (CRUD API)

🚀 Just taking NestJS for a test drive! 🏨

This is a simple **Hotel Reservations** application built with **NestJS** for the backend and a **vanilla HTML/CSS/jQuery** frontend. The application allows users to create, update, view, and delete hotel reservations.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Frontend Usage](#frontend-usage)
- [API Endpoints](#api-endpoints)
- [Sample API Requests](#sample-api-requests)
- [Technologies Used](#technologies-used)

## Features
- **Create** a new reservation
- **Read** (View) all reservations
- **Update** an existing reservation
- **Delete** a reservation
- Simple and responsive **HTML** front-end
- **AJAX** requests powered by **jQuery**
- Styled using **CSS**

## Project Structure
```
/hotel-reservations-app
├── /public
│   ├── index.html       # Frontend HTML file
│   ├── style.css        # CSS for the frontend
│   └── script.js        # jQuery logic for CRUD operations
├── /src
│   ├── /reservations
│   │   ├── dto
│   │   │   └── create-reservation.dto.ts
│   │   ├── entities
│   │   │   └── reservation.entity.ts
│   │   ├── reservations.controller.ts
│   │   ├── reservations.module.ts
│   │   └── reservations.service.ts
│   ├── app.module.ts
│   ├── main.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

Follow these steps to set up the project locally:

### 1. Clone the repository:
```bash
git clone https://github.com/kepha-okari/reservations-test.git
cd hotel-reservations-app
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Configure MySQL:
Make sure you have **MySQL** installed and running on your machine.(If note check out [this guide](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) to set up MySQL. 
). Create a database named `hotel_reservations`:

```sql
CREATE DATABASE hotel_reservations;
USE hotel_reservations;

CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    guestName VARCHAR(255) NOT NULL,
    roomNumber INT NOT NULL,
    checkInDate DATE NOT NULL,
    checkOutDate DATE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


```



### 4. Build and run the application:

```bash
npm run start:dev
```

## Running the Application

The backend will be running on **`http://161.35.6.91:6090`**.

## Frontend Usage

You can access the frontend by navigating to [http://161.35.6.91:6090](http://161.35.6.91:6090).

- **Create a reservation** by filling out the form with guest details.
- **View all reservations**: Reservations will be displayed in a table.
- **Update a reservation** by entering the reservation ID in the update form and modifying the details.
- **Delete a reservation** by entering the reservation ID in the delete form and submitting it.

---

## API Endpoints

### 1. **Create a Reservation**
- **Method**: `POST`
- **URL**: `http://161.35.6.91:6090/reservations`

#### Sample Request:

```bash
curl -X POST http://161.35.6.91:6090/reservations \
  -H "Content-Type: application/json" \
  -d '{
    "guestName": "John Doe",
    "roomNumber": 101,
    "checkInDate": "2024-09-13",
    "checkOutDate": "2024-09-15"
  }'
```

### 2. **Get All Reservations**
- **Method**: `GET`
- **URL**: `http://161.35.6.91:6090/reservations`

#### Sample Request:

```bash
curl -X GET http://161.35.6.91:6090/reservations
```

### 3. **Get a Reservation by ID**
- **Method**: `GET`
- **URL**: `http://161.35.6.91:6090/reservations/:id`
- **Example**: `http://161.35.6.91:6090/reservations/1`

#### Sample Request:

```bash
curl -X GET http://161.35.6.91:6090/reservations/1
```

### 4. **Update a Reservation**
- **Method**: `POST`
- **URL**: `http://161.35.6.91:6090/reservations/update/:id`
- **Example**: `http://161.35.6.91:6090/reservations/update/1`

#### Sample Request:

```bash
curl -X POST http://161.35.6.91:6090/reservations/update/1 \
  -H "Content-Type: application/json" \
  -d '{
    "guestName": "Jane Doe Updated",
    "roomNumber": 102,
    "checkInDate": "2024-09-14",
    "checkOutDate": "2024-09-16"
  }'
```

### 5. **Delete a Reservation**
- **Method**: `POST`
- **URL**: `http://161.35.6.91:6090/reservations/delete/:id`
- **Example**: `http://161.35.6.91:6090/reservations/delete/1`

#### Sample Request:

```bash
curl -X POST http://161.35.6.91:6090/reservations/delete/1
```

---

## Sample API Requests

These are ready-to-use `curl` commands for testing the API endpoints.

### 1. **Create a Reservation**

```bash
curl -X POST http://161.35.6.91:6090/reservations \
  -H "Content-Type: application/json" \
  -d '{
    "guestName": "John Doe",
    "roomNumber": 101,
    "checkInDate": "2024-09-13",
    "checkOutDate": "2024-09-15"
  }'
```

This will create a new reservation for **John Doe**.

---

### 2. **Get All Reservations**

```bash
curl -X GET http://161.35.6.91:6090/reservations
```

This will return a list of all reservations.

---

### 3. **Get a Reservation by ID**

```bash
curl -X GET http://161.35.6.91:6090/reservations/1
```

This will return the reservation with **ID 1**.

---

### 4. **Update a Reservation by ID**

```bash
curl -X POST http://161.35.6.91:6090/reservations/update/1 \
  -H "Content-Type: application/json" \
  -d '{
    "guestName": "Jane Doe Updated",
    "roomNumber": 102,
    "checkInDate": "2024-09-14",
    "checkOutDate": "2024-09-16"
  }'
```

This will update the reservation with **ID 1**.

---

### 5. **Delete a Reservation by ID**

```bash
curl -X POST http://161.35.6.91:6090/reservations/delete/1
```

This will delete the reservation with **ID 1**.

---

## Technologies Used
- **NestJS**: A progressive Node.js framework for building efficient server-side applications.
- **TypeORM**: An ORM for working with MySQL databases.
- **MySQL**: Relational database for storing reservation data.
- **HTML/CSS**: For building the front-end interface.
- **jQuery**: To handle front-end interaction and AJAX requests.

## License
This project is licensed under the MIT License.

---

You can now copy and paste these **curl** requests to test the API.

