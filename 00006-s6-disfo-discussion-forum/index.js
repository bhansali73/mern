require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 8082;
const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/";
app.use(express.json());

const userRoutes = require('./routes/user.routes');
app.use('/user', userRoutes);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB Connection Passed");
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB Connection Failed");
  });
