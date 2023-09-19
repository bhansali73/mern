const coinbaseData = require('../coinbase.json');//Load coinbase API from the file

// Get currencies on the basis of search query http://localhost:8081/currencies?min_value=0.01000000
function getCurrencies(req, res) {
  const minValue = req.query.min_value; // Get the min_value query parameter

  if (!minValue) {
    res.json(coinbaseData); // If no min_value is provided, return all data
    return;
  }

  // Filter the data based on the min_size property (as strings)
  const filteredData = coinbaseData.data.filter(
    (currency) => currency.min_size === minValue
  );

  if (filteredData.length > 0) {
    res.status(200).json(filteredData); // Return filtered data if found
  } else {
    res
      .status(404)
      .json({ message: "No currencies found with the specified min_value" });
  }
}

// Get detail of individual currency http://localhost:8081/currencies/INR, where INR is the currency symbol
function getCurrencyDetails (req, res) {
    const currencySymbol = req.params.symbol;
    const currencyInfo = coinbaseData.data.find(currency => currency.id === currencySymbol);
  
    if (currencyInfo) {
      res.status(200).json(currencyInfo); // Symbol found, send the data with status code 200
    } else {
      res.status(404).json({ message: 'Invalid Symbol' }); // Symbol not found, send a 404 response with the message
    }
}

module.exports = {
  getCurrencies,
  getCurrencyDetails
};
