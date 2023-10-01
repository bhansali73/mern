const config = require('../../config/config');
const API_KEY = process.env.API_KEY;

function verifyAPIKey(req, res, next) {
    const requestAPIKey = req.headers['x-api-key'];
    
    if(requestAPIKey !== API_KEY) {
        res.status(403).json({ message: 'Unauthorized Request' });
    } else {
        next();
    }
}

module.exports = verifyAPIKey;