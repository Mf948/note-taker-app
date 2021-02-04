
const { text } = require("express");
const express = require("express");
var fs = require("fs");
//var data =require("./db/db.json")


module.exports = function(app) {

    app.get("/api/notes", function(req, res) {

        fs.readFile("db/db.json", function(err, data) {
            if (err) throw err;
            console.log('data', JSON.parse(data))

            res.json(JSON.parse(data))
        })
  
    });
    app.post("api/notes", function(req,res){
        fs.readFile("db/db.json", function(err, data) {
            if (err) throw err;
            console.log('data', JSON.parse(data))

            res.json(JSON.parse(data))
            var text = req.body;
            fs.writeFileSync("db/db.json",JSON.parse(text)) 
           
            console.log(data)
            res.json(data)
        
        })

    });

 app.delete("api/notes", function(req,res){

    fs.readFile("db/db.json",function(err,data){
        if (err) throw err;
        console.log('data', JSON.parse(data))
    })
    
 });

};
