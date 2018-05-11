var mysql      = require('mysql');
var connection = mysql.createConnection({
    host        : "127.0.1.0",
    user        : "root",
    password    : "",
    database    : "reactapp"
});
connection.connect(function(err){ // test connection
    if(err){
        console.log('Database connection error');
    }else{
        console.log('Database connection successful');
    }
});

module.exports = connection;