const express = require('express');
const app = express();
const port = 3000;

// Create bodyParser variable
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// Direct express to the folder for static files
app.use(express.static('public'));

// Routing
    // Get index.html on root path
    app.get('/', (req, res) => {
        res.sendFile('index.html', (err) => {
            if (err){
                console.log(err);
            }
        })
    });

    // POST data to the Team Page
    app.post('/teamPage', jsonParser, (req, res) => {
        const body = req.body;
        const heading1 = body.heading1;
        res.send(`${heading1}`);
    })
// Start listening on specified port
app.listen(port, () => {
    console.log(`Now listening on port ${port}`)
});
