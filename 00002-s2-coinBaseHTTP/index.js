console.log('Hello from server')

const http = require('http');
const port = 8082;

const coinbaseData = require('./coinbase.json');//Load coinbase API from the file

const serverInfo = {
    serverName: 'My Server',
    version: '1.0.0',
    currentDate: new Date().toLocaleDateString(),
    currentTime: new Date().toLocaleTimeString()
}

const server = http.createServer((req, res) => {
    console.log('Received request');

    //Split the URL to get the currency symbol (e.g. 'INR' from /currencies/INR)
    //req.url is /currencies/INR, after splitting, parts will be an array containing the following elements:
    //['', 'currencies', 'INR']
    //'': An empty string because the URL starts with a '/' character.
    //'currencies': The first part of the path after the initial '/'. In this case, it indicates that the user is accessing the 'currencies' route.
    //'INR': The second part of the path after the second '/'. In this case, it represents a currency symbol (Indian Rupee, in this example).
    //So, by splitting req.url and examining the elements in the parts array, you can determine which route was accessed and extract any additional information from the URL, such as the currency symbol in this case.
    const parts = req.url.split('/');
    const currencySymbol= parts[2];

    switch(parts[1]) {
        case '':
            //if no currency symbol is provided
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Currency Database</h1>');
            res.end();
            break;
        case 'currencies':
            if(currencySymbol) {
                
                const currencyInfo = coinbaseData.data.find(currency => (currency.id === currencySymbol));

                if(currencyInfo){
                    //If currency is found, return the information from the API response
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.write(JSON.stringify(currencyInfo));
                    res.end();
    
                } else {
                    //if currency is not found, return the 404 error message
                    res.writeHead(404);
                    res.end('Currency not found');
                }
            } else {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(JSON.stringify(coinbaseData));
                res.end();
            }
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
    }
})

server.listen(port, () => {
    //This is logged in the terminal
    console.log(`Server running on port ${port}`);
    console.log(`Server address: ${server.address().address}`);
    console.log(`Server port: ${server.address().port}`);
    console.log(`Current Date: ${new Date().toLocaleDateString()}`);
    console.log(`Current Time: ${new Date().toLocaleTimeString()}`);
});
