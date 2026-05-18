let express = require('express');
let app = express();

// Exer. 1
console.log("Hello World");

// Exerc. 2
app.get('/', (req, res) => {

    res.send("Hello Express");

})










 module.exports = app;
