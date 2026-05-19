let express = require('express');
let app = express();
require('dotenv').config();

// Exer. 1
console.log("Hello World");

// Exerc. 2
//app.get('/', (req, res) => {
//        res.send("Hello Express");
//});

// Exerc. 4 => middleware to serve static files, such as stylesheets
app.use('/public',express.static(__dirname + '/public'));

// Exerc.3
app.get("/", (req, res) =>{
    res.sendFile( __dirname + '/views/index.html');
});

// Exerc. 5
//app.get("/json", (req, res) =>{
//    res.json({ "message": "Hello json" });
//});

// Exerc. 6
app.get("/json", (req, res) =>{
    const msg = { "message": "Hello json" };

    if( process.env.MESSAGE_STYLE === 'uppercase' ) {
        msg.message = msg.message.toUpperCase();
      };

    return res.json(msg);
});









 module.exports = app;
