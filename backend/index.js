var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : 'yapapp.cpqxkffrdz0z.ap-south-1.rds.amazonaws.com',
//   user     : 'admin',
//   password : 'ItsMeBitches1!',
//   database : 'yapapp'
// });

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'yapapp'
});

connection.connect();


var values = [id, userName, firstName, lastName, email, imageURL, password];

function getUser(userId, callback) {
  connection.query('SELECT * from users WHERE id = ?', [userId], function (error, results, fields) {
    if (error) {
      console.log("Unexpected Error: " + error);
    } else {
      console.log("User with ID (" + results[0].id + ") retrieved: " + results[0].userName);
    }
  });
}

function addUser(values) {
  connection.query("INSERT INTO users (`id`, `username`, `firstname`, `lastname`, `emailId`, `imageUrl`, `password`) VALUES (?, ?, ?, ?, ?, ?, ?)", values, function (error, results, fields) {
    if (error) {
      console.log("Unexpected Error: " + error);
    } else {
      console.log("User: "+ values[2] + " " + values[3] +" added successfully");
    }
  });
}

// module.exports = getUserData;


