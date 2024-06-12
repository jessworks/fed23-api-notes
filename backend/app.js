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
    

        let query = "SELECT * FROM docsgalore WHERE soft_delete = 0";

        connection.query(query, (err, data) => {
            if (err) console.log("err", err);

            console.log("documents", data);
            res.json(data);
        })
    })
})

app.post("/document", (req, res) => {

    let { document, notes } = req.body;

    connection.connect((err) => {
        if (err) console.log("err", err);

        let query = "INSERT into docsgalore (document, notes) VALUES (?, ?)";
        let values = [document, notes]; 
        
        connection.query(query, values, (err, data) => {
            if (err) console.log("err", err);

            console.log("documents", data);
            res.json({message: "document saved"});
        })
    })
})

app.delete("/document/:documentId", (req, res) => {
    let documentId = req.params.documentId;

    connection.connect((err) => {
        if (err) console.log("err", err);

        let query = "UPDATE docsgalore SET soft_delete = 1 WHERE id = ?";
        let values = [documentId];

        connection.query(query, values, (err, data) => {
            if (err) console.log("err", err);

            console.log("documents", data);
            res.json({message: "document deleted"});
        })
    })
})

app.get("/document/:documentId", (req, res) => {
    let documentId = req.params.documentId;

    connection.connect((err) => {
        if (err) console.log("err", err);
    

        let query = "SELECT * FROM docsgalore WHERE id = ?";
        let values = [documentId];

        connection.query(query, values, (err, data) => {
            if (err) console.log("err", err);

            console.log("documents", data);
            res.json(data);
        })
    })
})


app.patch("/document/:documentId", (req, res) => {
    let documentId = req.params.documentId;
    let { document, notes } = req.body;

    connection.connect((err) => {
        if (err) console.log("err", err);

        let query = "UPDATE docsgalore SET document = ?, notes = ? WHERE id = ?";
        let values = [document, notes, documentId];

        connection.query(query, values, (err, data) => {
            if (err) console.log("err", err);

            console.log("documents", data);
            res.json({message: "document changed"});
        })
    })
})


module.exports = app;
