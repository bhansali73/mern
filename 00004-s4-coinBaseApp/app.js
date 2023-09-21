require('dotenv').config();
console.log("Hello from server");
const express = require("express");
const app = express();
const port = 8081;

// Require the verifyAuth middleware as a named import
const { verifyAuth } = require('./middlewares/verifyAuth');

//Routes
const currencyRoutes = require("./routes/currencies.routes");
const userRoutes = require("./routes/users.routes");
const homeRoutes = require("./routes/index.routes");

app.use(express.json());

// Retrieve the password from environment variables
// const Password = process.env.ROUTE_PASSWORD;

app.use(verifyAuth); // Entire app is now password protected

//use() function takes 2 parameters, 1. route(string) and 2. middleware for the router, the object that is imported
app.use("/", homeRoutes); // Apply the verifyAuth middleware to the / route
app.use("/currencies", currencyRoutes);
app.use("/users", userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
