require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
// Connect DB
connectDB();

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
