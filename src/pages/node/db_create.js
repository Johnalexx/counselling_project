var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
//   user: "yourusername",
  password: ""
//   password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});