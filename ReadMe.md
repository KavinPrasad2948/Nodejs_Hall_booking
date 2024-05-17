# 🏢 Hall Booking Backend

This is a simple Node.js-based backend application designed for managing hall bookings. It provides a RESTful API for creating rooms, booking rooms, and retrieving booking details.

## ✨ Features

- **Room Management**:
  - 🏠 Create a room with number of seats, amenities, and price per hour.
  - 📋 List all rooms with their details and associated bookings.
  
- **Booking Management**:
  - 📅 Book a room by specifying customer name, date, time, and room ID.
  - 👥 List all customers with their booking details.
  - 🔍 Retrieve all bookings made by a specific customer.

## 🛠️ Technology Stack

- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework for Node.js.
- **body-parser**: Middleware to parse incoming request bodies.

## 🗂️ Project Structure

- `server.js`: Main entry point of the application.
- `Routes`: Contains route definitions for rooms and bookings.
- `Controllers`: Contains logic for handling room and booking requests.
- `Models`: Contains data store definitions.

## 📑 API Endpoints

### Rooms

- **Create a Room**
  - **Endpoint**: `POST /rooms`
  - **Request Body**:
    ```json
    {
      "numberOfSeats": 50,
      "amenities": ["Projector", "Whiteboard"],
      "pricePerHour": 100
    }
    ```

- **List All Rooms**
  - **Endpoint**: `GET /rooms`

### Bookings

- **Book a Room**
  - **Endpoint**: `POST /bookings`
  - **Request Body**:
    ```json
    {
      "customerName": "John Doe",
      "date": "2024-05-20",
      "startTime": "10:00",
      "endTime": "12:00",
      "roomId": 1
    }
    ```

- **List All Customers with Bookings**
  - **Endpoint**: `GET /bookings/customers`

- **List Bookings for a Customer**
  - **Endpoint**: `GET /bookings/customers/:customerName/bookings`

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourrepository.git
   cd yourrepository
2. Install dependencies:

   ```npm install```

3. Start the server:

   ```npm start```

### Deployment

    Push your code to a Git repository.
    Deploy your application to a cloud service like Render.com.
    Follow the specific deployment steps provided by the cloud service.

### 📜 License

This project is licensed under the MIT [License](`https://github.com/KavinPrasad2948?tab=repositories`)
