const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');
const nodemailer = require("nodemailer");//send email library
const mustache = require('mustache');

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

// Putty Code
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/newsletter', async (req, res) => {
    const body = req.body
    const fname = body.fname
    const lname = body.lname
    const email = body.email
    const message = body.message

    storeSubmission(fname, lname, email, message)
    sendEmail(fname, email)

    // Create templated version of HTML file
    const output = mustache.render(
        // Get the template file as a string
        fs.readFileSync("templates/template.html").toString(),

        // Replace the template variable "message" with our actual message
        {
            message: `Thank you ${fname} for signing up to the Newsletter!`,
            message2: `
                You will receive an email confirmation shortly with details on our newsletter. 
                <br>
                This will include dates and topics of focus.
            `
        }

    )

    // Send back templated response
    res.send(output);
})

/**
 * append submission content to json file
 * @param {first name} fname 
 * @param {last name} lname 
 * @param {email} email 
 * @param {message} message 
 */

function storeSubmission(fname, lname, email, message) {
    // create file name
    const file = "newsletter-subs.json"

    // define content initial file string
    let content = '';

    // construct object from submission 
    const submission = {
        fname: fname,
        lname: lname,
        email: email,
        message: message
    }

    // if file exists get contents.
    if (fs.existsSync(file)) {
        content = fs.readFileSync(file)
    }




    // store form submission in json file
    fs.writeFileSync(
        file,
        `${content}\n${JSON.stringify(submission)}`
    )
}

//
async function sendEmail(fname, email) {
    const transporter = nodemailer.createTransport('smtp://5a8f78dbe25441:7ef08c6570cd3c@sandbox.smtp.mailtrap.io')

    // transporter.sendMail(email, hi fname, thanks for signing up)}

    const info = transporter.sendMail({
        from: 'For The People <fTP@example.com>', // sender address
        to: email,
        subject: "Sign Up Successful",
        text: `Hello ${fname}, thanks for signing up`
    });

    //to confirm email sent
    console.log("Message sent: %s", info.messageId);
}

// Start listening on specified port
app.listen(port, () => {
    console.log(`Now listening on port ${port}`)
});
