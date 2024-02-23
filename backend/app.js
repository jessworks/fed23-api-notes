var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const connection = require("./lib/conn");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get("/document", (req, res) => {
    connection.connect((err) => {
        if (err) console.log("err", err);
    

        let query = "SELECT * FROM docsgalore";

        connection.query(query, (err, data) => {
            if (err) console.log("err", err);

            console.log("documents", data);
            res.json(data);
        })
    })
})

app.post("/document", (req, res) => {

    let document = req.body.document;

    connection.connect((err) => {
        if (err) console.log("err", err);

        let query = "INSERT into docsgalore (document) VALUES (?)";
        let values = [document]; 
        
        connection.query(query, values, (err, data) => {
            if (err) console.log("err", err);

            console.log("documents", data);
            res.json({message: "document saved"});
        })
    })
})

module.exports = app;
