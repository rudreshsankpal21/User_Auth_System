# 🔐 User Authentication System (JWT + Sessions + isAdmin Middleware)

A secure and scalable Node.js backend authentication system using Express, JWT, and MongoDB. Now includes role-based access control using `isAdmin` middleware.

---

## 📁 Folder Structure

```

├── config/
│ └── db.js # MongoDB connection
├── controllers/
│ └── authController.js # Auth logic (register, login, etc.)
├── middlewares/
│ ├── authMiddleware.js # JWT Auth Middleware
│ └── isAdmin.js # Admin-only route protection
├── models/
│ └── User.js # User schema
├── routes/
│ └── authRoutes.js # Auth route definitions
├── .env
├── server.js
└── package.json

```

---

## 🔐 Features

- ✅ JWT Authentication
- ✅ Secure password hashing with bcrypt
- ✅ Role-based access control (admin/user)
- ✅ `authMiddleware` for protected routes
- ✅ `isAdmin` middleware for admin-only access
- ✅ Clean project structure using MVC pattern
- ✅ Tested using Postman

---

## 🧪 API Endpoints

### 📝 Public Routes

| Method | Route              | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | /api/auth/register | Register new user        |
| POST   | /api/auth/login    | Login user (returns JWT) |

---

### 🔒 Protected Routes (JWT Required)

| Method | Route           | Description           | Access          |
| ------ | --------------- | --------------------- | --------------- |
| GET    | /api/auth/me    | Get current user      | Logged-in users |
| GET    | /api/auth/admin | Admin-only route test | Admins only     |

🧠 To test `/api/auth/admin`:

- Login using an admin account
- Use `Bearer <token>` in `Authorization` header

---

## 🛠️ Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** for authentication
- **bcrypt** for password hashing
- **dotenv** for environment configs
- **Postman** for API testing

---

## ⚙️ Setup Instructions

1. Clone the repo
2. Install dependencies
   ```bash
   npm install
   ```

````

3. Create a `.env` file and add:

   ```
   PORT=5000
   MONGO_URI=your_mongo_connection
   JWT_SECRET=your_secret_key
   ```

4. Run the server

   ```bash
   npm run dev
   ```

5. Test APIs using **Postman**

---

## 👨‍💻 Author

Built with 💻 and 💪 by Rudresh
**Backend-focused MERN Developer**

---

## 🌱 Want to Help?

If this helped you in any way, a ⭐️ star would mean a lot!
````
