
//const { text } = require("express");
const express = require("express");
var fs = require("fs");



module.exports = function(app) {

    app.get("/api/notes", function(req, res) {

        fs.readFile("db/db.json", function(err, data) {
            if (err) throw err;
            console.log('data', JSON.parse(data))

            res.json(JSON.parse(data))
        })
  
    });
     app.post("/api/notes", function(req,res){
        fs.readFile("db/db.json", function(err, data) {
            if (err) throw err;
           console.log('data', JSON.parse(data))

          let snotes = JSON.parse(data)
           var text = req.body;
          snotes.push(text)

         fs.writeFileSync("db/db.json", JSON.stringify(snotes)) 
           
         res.json(text)
        
      })

     });

 //app.delete("api/notes/id", function(req,res){

    //fs.readFile("db/db.json",function(err,data){
    //    if (err) throw err;
    //    console.log('data', JSON.parse(data))
//data.forEachforEach(function( id ) {
   // if (item === '1') {
    //  object.splice(index, 1)
   // }

   // })
    
 //})

//})

}
