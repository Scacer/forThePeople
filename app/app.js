const express = require('express');
const app = express();
const port = 3000;

// Direct express to the folder for static files
app.use(express.static('public'));

// Routing
    // GET routes
    app.get('/', (req, res) => {
        res.sendFile('index.html', (err) => {
            if (err){
                console.log(err);
            }
        })
    });

// Start listening on specified port
app.listen(port, () => {
    console.log(`Now listening on port ${port}`)
});
