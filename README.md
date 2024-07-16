# Project Documentation: Airplane Food Ordering App

## Overview

This project consists of two main parts:

1. **Backend API**: Built with Nest.js and TypeScript, providing endpoints to fetch meal data and manage orders.
2. **Frontend Application**: Developed using Vite and React, allowing users to browse meals, select drinks, and place orders.

### Technologies Used

- **Backend**:

  - Nest.js
  - TypeScript
  - Swagger for API documentation

- **Frontend**:
  - Vite
  - React
  - Tailwind CSS
  - React Router (for navigation)
  - State management (React Context API)

## Backend (Nest.js API)

### API Endpoints

- **GET `/meals`**: Fetches a list of meals with optional filtering by tags and pagination.
- **GET `/labels`**: Fetches a list of tags.
- **Swagger Documentation**: Available at `/api` for detailed API specifications.

### Setup and Running Locally

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd server
   ```
2. **Install Dependencies**
   ```bash
   yarn install
   ```
3. **Setting up .env File**
   Create a `.env` file in the root directory of your project and add the following environment variables:
   ```plaintext
   MONGODB_URI=MongoDB connection URI for connecting to your MongoDB database.food-ordering
   ```
4. **Start the Server**
   ```bash
   yarn start:dev
   ```

## Frontend (React)

### Setup and Running Locally

1. **Clone the Repository**
   ```bash
   cd client
   ```
2. **Install Dependencies**
   ```bash
   yarn install
   ```
3. **Start the Server**
   ```bash
   yarn dev
   ```
