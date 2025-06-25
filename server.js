require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
// Routes

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
