require('dotenv').config();
let express = require('express');
let app = express();

// Exerc. 7
app.use("/", (req, res, next) =>{
    console.log(req.method + " " + req.path + " " + "-" + " " + req.ip );
    next();
});

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
    //const msg = { "message": "Hello json" };
    let message = "Hello json";

    if( process.env.MESSAGE_STYLE === 'uppercase' )
         {
            message = message.toUpperCase();
         } 
    res.json({ "message": message });
    

    //return res.json(msg);
});

// Exerc. 8
app.get('/now', (req, res, next) => {

    req.time = new Date().toString();
    next();

}, (req, res) => {

    res.json({ time: req.time });

});

// Exerc. 9
app.get('/:word/echo', (req, res) =>{

    const word = req.params.word;
    res.json({ echo: word });
});


 module.exports = app;
