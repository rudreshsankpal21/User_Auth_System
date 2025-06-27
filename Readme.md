# 🛡️ User Authentication System

A simple and secure user authentication backend built with **Node.js**, **Express**, **MongoDB**, and **JWT**. This project includes user registration, login, password hashing, and protected routes using token-based authentication.

---

## 🔧 Tech Stack

- **Node.js**
- **Express**
- **MongoDB** + Mongoose
- **JWT (JSON Web Tokens)**
- **bcryptjs** for password hashing
- **dotenv** for environment variables
- **Postman** for testing

---

## ✨ Features

- ✅ User Registration with hashed passwords
- ✅ User Login with JWT token generation
- ✅ Protected routes using middleware
- ✅ Clean and modular folder structure
- ✅ Environment variable configuration with `.env`
- 🚧 Optional: Token refresh & sessions (to be added later)

---

## 🗂️ Project Structure

```

auth-system/
├── controllers/
│ └── authController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ └── User.js
├── routes/
│ └── authRoutes.js
├── config/
│ └── db.js
├── .env
├── server.js
└── package.json

```

---

## 📦 Installation & Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/auth-system.git
   cd auth-system
   ```

````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up your `.env` file:**

   ```
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the server:**

   ```bash
   nodemon server.js
   ```

---

## 🔐 API Endpoints

| Method | Endpoint           | Description            | Protected |
| ------ | ------------------ | ---------------------- | --------- |
| POST   | /api/auth/register | Register a new user    | ❌        |
| POST   | /api/auth/login    | Login and get token    | ✅        |
| GET    | /api/protected     | Access protected route | ✅        |

Use `Authorization: Bearer <token>` in headers to access protected routes.

---

## 🧪 Testing

Use **Postman** to:

- Register a new user
- Login and get a JWT
- Access protected route with JWT

---

## 👨‍💻 Author

Built with ❤️ by Rudresh

---

````
