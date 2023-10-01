require("dotenv").config();
console.log("Hello from server");

//Database setup
const mongoose = require("mongoose");
//const DB_URL = "mongodb://127.0.0.1:27017/"; //if we do not specify a database at the end of URI, the default database in MongoDB is always selected DB in local instance
const DB_URL = "mongodb://127.0.0.1:27017"; //We override here the default local instance with a db website. All operations will performs w.r.t this database

const express = require("express");
const app = express();
const port = 8081;
app.use(express.json());

//Routes
const blogRoutes = require("./routes/blog.routes");

//Make Mongoose connect to the database
mongoose
    .connect(DB_URL)
    .then(() => {
        //This is logged in the terminal to show DB connection works
        console.log("DB Connection Passed");

        //Run the project only if the DB connection is successful
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((err) => {
        //catch errors
        console.log("DB Connection Failed", err);
    });

//use() function takes 2 parameters, 1. route(string) and 2. middleware for the router, the object that is imported
app.use("/blogs", blogRoutes);