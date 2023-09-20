# OBJECTIVES
Working with NodeJs, Express

## 1. KEY TOPICS
- Express Routes
- Validating Routes
- Using Joi
- Storing Server Secrets with environment variables

## 2. HOW TO INSTALL THE PROJECT
npm install

## 3. HOW TO RUN THE PROJECT
npm start

## 4. HOW TO USE (GET REQUESTS in POSTMAN or PASTE IN BROWSER)

### 1. FOR CURRENCIES (Also check 5 below)
- http://localhost:8081/
- http://localhost:8081/currencies
- http://localhost:8081/currencies/INR
- http://localhost:8081/currencies?min_value=0.001

### 2. FOR USERS
- http://localhost:8081/users
- http://localhost:8081/users/6607d086-7159-4c26-beb1-280c9f9cbf35
- http://localhost:8081/users/search?gender=female
- http://localhost:8081/users/search?age=50
- http://localhost:8081/users/search?gender=female&age=50

## 5. TEST '/currencies' ROUTE IN POSTMAN
To test your protected /currencies route with Postman, you can follow these steps:

- Start your Express server if it's not already running.
- Open Postman.
- Create a new request:
    - Click on the "New" button in the upper-left corner.
    - Choose a request type (e.g., GET).
    - Enter the URL for your /currencies route (e.g., http://localhost:8081/currencies).
    - Set the Authorization Header:
    - Click on the "Headers" tab.
    - Add a header with the key "Authorization" and the value "Bearer YourPasswordHere". Replace "YourPasswordHere" with the actual password you've set in your environment variable (from your .env file).
    - Click the "Send" button to make the request.

Postman will send the request to your server. If the password in the "Authorization" header matches the one you've set in your environment variable, your server will process the request, and you'll receive a response.

If the password is correct, you should get a successful response. If the password is incorrect, you'll receive a 403 Forbidden response.

Remember to replace "YourPasswordHere" with the actual password from your environment variable, and ensure that your Express server is running when you make the request in Postman.