
const e = require("express");
var fs = require("fs");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {

        fs.readFile("db/db.json", function(err, data) {
            if (err) throw err;
            console.log('data', JSON.parse(data))

            res.json(JSON.parse(data))
        })
  


app.post("/api/notes", function(req, res) {

    fs.readFile("db/db.json", function(err, data) {
        if (err) throw err;
        console.log('data', JSON.parse(data))
        console.log(request.body);      // your JSON
       response.send(request.body);   

        res.json(JSON.parse(data))

    })
 
})

})
}