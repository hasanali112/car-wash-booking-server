# Car Washing System Backend

## Project Overview

The Car Washing System backend is designed to provide a reliable and secure environment for managing car wash services. This backend focuses on core functionalities such as error handling, CRUD operations, authentication & authorization, and transaction management with rollback capabilities.

## Features

- **Comprehensive Error Handling**: Centralized and structured error management for better user feedback and debugging.
- **CRUD Operations**: Fully functional endpoints to create, read, update, and delete car wash services and user data.
- **Secure Authentication & Authorization**: Role-based access with JWT for secure interactions.
- **Transaction Management**: Database transactions with rollback support to maintain data integrity.
- **User-Friendly API Responses**: Consistent and informative responses for ease of integration with the frontend.

## Technology Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Validation**: ZOD for data validation

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (optional for containerized deployment)
- Database setup (MySQL/PostgreSQL/MongoDB)

### Steps to Set Up

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/car-washing-system.git
   cd car-washing-system
   ```

2. Configure environment variables: Create a .env file based on the .env.example and fill in your database and JWT secret configurations.

3. Run the application:

   ```bash
    npm start
   ```
