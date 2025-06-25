require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

// Routes

// Connect DB
connectDB();

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
