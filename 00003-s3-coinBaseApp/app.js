require('dotenv').config();
console.log("Hello from server");
const express = require("express");
const app = express();
const port = 8081;

//Restrict access with a weak protection that does the job but it is not protected itself
// const password = "LetMeIn"; // Define your server password

//Use the system’s environment variables to mask and hide sensitive information like API keys or Server Endpoints
const Password = process.env.ROUTE_PASSWORD //requires restart for server to load env variables when added

// Define the verifyAuth function
function verifyAuth (req, res, next){
    const authHeaders = req.headers.authorization;

    if(authHeaders && authHeaders === `Bearer ${Password}`) {
        // If the Authorization header matches the password, proceed to the next middleware
        next();
    } else {
        // If the Authorization header is missing or doesn't match, send a 403 Forbidden response
        res.status(403).json({ message: 'Unauthorized Request' });
    }
}

//Routes
const currencyRoutes = require("./routes/currencies.routes");
const userRoutes = require("./routes/users.routes");
const homeRoutes = require("./routes/index.routes");

app.use(express.json());

//use() function takes 2 parameters, 1. route(string) and 2. middleware for the router, the object that is imported
// app.use("/", verifyAuth, homeRoutes); // Apply the verifyAuth middleware to the / route
app.use("/", homeRoutes); // Apply the verifyAuth middleware to the / route
app.use("/currencies", verifyAuth, currencyRoutes);
app.use("/users", userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
