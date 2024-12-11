# Book Shop API

## Overview

The Book Shop API is an Express.js application developed using TypeScript and MongoDB with Mongoose to manage book inventory and customer orders. It supports CRUD operations for books, order management, and revenue calculation.


## Features

1. **Book Management** 📚

   - Add, update, retrieve, and delete books.
   - Schema validation ensures data integrity (e.g., categories restricted to predefined values).
   - Real-time stock management.

2. **Order Management** 🛒

   - Place orders and adjust inventory accordingly.
   - Calculate the total price of orders dynamically.
   - Prevent orders exceeding available stock.

3. **Revenue Calculation** 💰

   - Aggregates revenue from all orders.

4. **Error Handling** ⚠️

   - Provides descriptive error messages for invalid inputs, missing data, and insufficient stock.

5. **API Responses** ✅

   - Follows consistent structure with clear success and error messages.


## Endpoints

### Products

- **Create a Book**: `POST /api/products` 📖
- **Get All Books**: `GET /api/products` 📝
- **Get Specific Book**: `GET /api/products/:productId` 🔍
- **Update Book**: `PUT /api/products/:productId` ✏️
- **Delete Book**: `DELETE /api/products/:productId` ❌

### Orders

- **Place an Order**: `POST /api/orders` 🛍️
- **Calculate Revenue**: `GET /api/orders/revenue` 📈


## Installation

### Prerequisites

- Node.js (v16+) 🖥️
- MongoDB (local or cloud instance) 🗄️

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/danialcodes/phl2_assignment2
   cd bookshop-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory with the following variables:
     ```env
     DATABASE_URL=
     PORT=
     ```
4. Start the application:
   ```bash
   npm run start:dev
   ```

## Development Instructions

### Available Scripts

- **Start the application**:
  ```bash
  npm start
  ```
- **Development server**:
  ```bash
  npm run start:dev
  ```
- **Build the application**:
  ```bash
  npm run build
  ```
- **Format code**:
  ```bash
  npm run format
  ```
- **Lint code**:
  ```bash
  npm run lint
  ```
- **Fix lint issues**:
  ```bash
  npm run lint:fix
  ```
- **Run load test**:
  ```bash
  npm run loadtest
  ```


## Usage

### Example Requests

#### Create a Book

**Request**:

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 10,
  "category": "Fiction",
  "description": "A story about the American dream.",
  "quantity": 100,
  "inStock": true
}
```

**Response**:

```json
{
  "message": "Book created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 10,
    "category": "Fiction",
    "description": "A story about the American dream.",
    "quantity": 100,
    "inStock": true
  }
}
```

#### Place an Order

**Request**:

```json
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 20
}
```

**Response**:

```json
{
  "message": "Order created successfully",
  "success": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 20
  }
}
```


## Build & Deployment

1. Build script:
   ```bash
   npm run build 
   npm start
   ```


## Submission

1. **GitHub Repository**: [https://github.com/danialcodes/phl2\_assignment2](https://github.com/danialcodes/phl2_assignment2)
2. **Live Deployment**: [https://phl2-assignment2.vercel.app](https://phl2-assignment2.vercel.app).
3. **Video Explanation**: Link to a recorded video showcasing the features and testing of the API.
4. **README File**: 

---

## Author

**Name**: Md Danial Islam

---

## License

Use for anything giving me credit

