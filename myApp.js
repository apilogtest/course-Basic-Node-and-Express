let express = require('express');
let app = express();

// Exer. 1
console.log("Hello World");

// Exerc. 2
//app.get('/', (req, res) => {
//        res.send("Hello Express");
//});

// Exerc.3
app.get("/", (req, res) =>{
    res.sendFile( __dirname + '/views/index.html');
});










 module.exports = app;
