console.log('Hello from server')

const express = require('express');
const app = express();
const port = 8081;
const currenciesController = require('./controllers/currencies.controller');
const usersController = require('./controllers/users.controller');

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

app.get('/', (req, res)=> {
  res.send('<h1>Currency Database</h1>');
})

//Currencies
app.get('/currencies', currenciesController.getCurrencies);
app.get('/currencies/:symbol', currenciesController.getCurrencyDetails);

//Users
app.get('/users', usersController.getUsers);
app.get('/users/search', usersController.getUsersByGenderAndAge);
app.get('/users/:uuid', usersController.getUsersByUUID);
