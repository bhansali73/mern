# INTRODUCTION
Get started using MongoDB with Node.js
- Focus: MongoDB
- Pre-requisites: Node.js, Express.js, MongoDB


## OBJECTIVE
Get started using MongoDB with NodeJS. It’s crucial to know how to deal with databases programmatically from within your Nodejs application. In this project we write CRUD APIs for a TODO application which utilize MongoDB for persisting data.


## PREREQUISITE
The NodeJS Basics Byte is a prerequisite and the current Byte assumes knowledge of topics covered there.


## BACKGROUND
Databases help to persist data. We look at what data some of the major companies would be storing in their databases
- Amazon - database of the products sold via their platform
- LinkedIn - database of users and their connections
- Google - database of ..., everything?


## PRIMARY GOALS
- Persist data for a Express.js TODO application using MongoDB
- Use the Mongoose ODM ( Object-Document Mapper) for data retrieval and creation
- Understand how to use a middleware and its utility


# SETUP
## SETUP BACKEND
Install dependencies and start Backend
Execute the below commands to install the Node.js backend dependencies and start the backend server

- cd Backend folder in terminal
- npm install
- npm start
- The backend application will start on port 8082


Populate MongoDB with sample data
Execute the below commands to populate your NoSQL database with sample data

<!-- cd /home/crio-user/workspace/bytes/me_nodejs_mongodb/Backend -->
<!-- chmod +x setup.sh
./setup.sh -->

## SETUP FRONTEND
Install dependencies and start Frontend
- cd Frontend folder in terminal
- npm install
- npm start
- The backend application will start on port 8081

<!-- 
cd /home/crio-user/workspace/bytes/me_nodejs_mongodb/Frontend

chmod +x setup.sh

./setup.sh

npm install

npm start -->

Using Postman (Optional)
curl commands are provided for you to test the APIs you implement. Optionally, you can use Postman to do that. Here’s the Postman collection for API requests you’ll implement.