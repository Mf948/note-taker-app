
//const { text } = require("express");
const express = require("express");
var fs = require("fs");


module.exports = function (app) {

    app.get("/api/notes", function (req, res) {

        fs.readFile("db/db.json", function (err, data) {
            if (err) throw err;
           

            res.json(JSON.parse(data))
        })

    });
    app.post("/api/notes", function (req, res) {
        fs.readFile("db/db.json", function (err, data) {
            if (err) throw err;
            

            let snotes = JSON.parse(data)
            var text = req.body;
            snotes.push(text)

            fs.writeFileSync("db/db.json", JSON.stringify(snotes))

            res.json(text)

        })

    });

    app.delete("/api/notes/:title", function (req, res) {
        // Empty out the arrays of data
        fs.readFile("db/db.json", function (err, data) {
            if (err) throw err;
            let title = req.params.title;
            var snotes = JSON.parse(data)
            snotes = snotes.filter(snotes => {
                if (snotes.title != title)
                return snotes 
            });

      fs.writeFileSync("db/db.json", JSON.stringify(snotes))

        
        });
    })
};


