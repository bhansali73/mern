const config = require('../config/config');

// Retrieve the password from environment variables
const Password = process.env.ROUTE_PASSWORD;

// Define the verifyAuth function
//This is a middleware function which has access to request object, response object and the next middleware function in the application's response cycle
function verifyAuth (req, res, next){
    const authHeaders = req.headers.authorization;

    if(authHeaders && authHeaders === `Bearer ${Password}`) {
        // If the Authorization header matches the password, proceed to the next middleware
        next(); //passes the request to the next object in line
    } else {
        // If the Authorization header is missing or doesn't match, send a 403 Forbidden response
        res.status(403).json({ message: 'Unauthorized Request' });
    }
}

module.exports = { verifyAuth };