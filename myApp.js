let express = require('express');
let app = express();

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
app.get("/json", (req, res) =>{
    res.json({ "message": "Hello json" });
});









 module.exports = app;
