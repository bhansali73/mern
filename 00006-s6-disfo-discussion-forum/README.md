# INTRODUCTION
Get started using MongoDB with Node.js
- Focus: MongoDB
- Pre-requisites: Node.js, Express.js, MongoDB, Mongoose


## OBJECTIVE
Concepts - Joi Validations, Environment Variables, Middleware, MongoDB, Mongoose Models & Schema, Creating and Reading.


## PREREQUISITE
The NodeJS Basics Byte is a prerequisite and the current Byte assumes knowledge of topics covered there.


## BACKGROUND
Databases help to persist data. We look at what data some of the major companies would be storing in their databases
- Amazon - database of the products sold via their platform
- LinkedIn - database of users and their connections
- Google - database of ..., everything?


## PRIMARY GOALS
- Nested Schema
- Validations on the backend
- MongoDB Queries
- Service Layer for Express


# SETUP
## SETUP 
Install dependencies and start 
Execute the below commands to install the Node.js backend dependencies and start the backend server

- npm install
- npm start
- The backend application will start on port 8082
- run mongosh in terminal to connect the the mongoDB


Using Postman (Optional)
curl commands are provided for you to test the APIs you implement. Optionally, you can use Postman to do that. Here’s the Postman collection for API requests you’ll implement.

# Test in Postman
## Registration
POST /user/register 
Content-type application/json
Request 
Body
fullName String, max characters - 50, default = “”
username String, unique, required, max characters - 25
email String, unique, required, valid email
example
{
  "fullName": "Randhir Kapoor",
  "username": "RANDHIRKAPOOR",
  "email": "randhirkapoor@example.com"
}

## Get all users
GET /user/all
Request
Headers - {“x-api-key”: “Abracadabra”}

## GET /user/:username
Request
Params - {username: string}