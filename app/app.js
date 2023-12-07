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

    // POST heading 1
    app.post('/teamHeading1', jsonParser, (req, res) => {
        const body = req.body;
        const heading1 = body.heading1;
        res.send(`${heading1}`);
    })

    // POST heading 2
    app.post('/teamHeading2', jsonParser, (req, res) => {
        const body = req.body;
        const heading2 = body.heading2;
        res.send(`${heading2}`);
    })
// Start listening on specified port
app.listen(port, () => {
    console.log(`Now listening on port ${port}`)
});
