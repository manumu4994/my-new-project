var express = require('express');
var app = express();
var mysql = require('mysql');
// var bodyParser = require('body-parser');

// app.use(bodyParser.json({ type: 'application/json' }));
// app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({

    host: "mydb.cvcwejwpncbt.us-east-1.rds.amazonaws.com",
    port: "3303",
    user: "admin",
    password: "password", //empty for window
    database: "FoodDatabase"

});

// insert into table

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO Test (name, email, phone_number) VALUES ('เสี่ยโอ', 'odeng@hotmail.com', 112)";
    con.query(sql, function (err, result) {
    if (err) throw err;
      console.log("1 record inserted");
    });
  });

// delete table
// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DELETE FROM Test WHERE name = 'abc'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     });
//   });

//using express
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
