var express = require('express');
var connection = require('../db');
var bodyParser = require('body-parser');
//var validate = require('express-validation'); // check data validation
var app = express();

/********************************************************/

/* Start set express for active header CORS */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // '*' penggunaan url default, semua url dapat mengakses
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Body parser use JSON data, for get data input
//app.use(bodyParser.urlencoded({ extended: true }));
/* End set express for active header CORS */

/********************************************************/

app.get('/api/v1/user/list', function (req, res) {
    connection.query('Select * from user', function (error, result) {
        // if(error) throw error;
        if(error){
            return res.send(error);
        }
        return res.send({ data:result, message: 'Success Get'});
    })
})

app.post('/api/v1/user/add', function (req, res) {
    var user = {
        name    : req.body.name,
        gender  : req.body.gender,
        age     : req.body.age,
        title   : req.body.title,
        email   : req.body.email
    }

    connection.query('INSERT INTO user SET ?', user ,function(error, result){
        if(error) error;
        return res.send({error:false, data:result, message: 'Success Create'})
    })
})

app.get('/api/v1/user/:id', function (req, res) {
    connection.query('Select * from user where id=?',[req.params.id],function (error, result) {
        if(error) throw error;
        return res.send({ error, data:result, message: 'Success Get'});
    })
})

app.get('/api/v1/user/update/:id',function (req, res){
    var update = {
        name    : req.query['name'],
        gender  : req.query['gender'],
        age     : req.query['age'],
        title   : req.query['title'],
        email   : req.query['email']
    }
    connection.query('UPDATE user SET ? WHERE id = ' + [req.params.id], update,function (error, result) {
        if(error) throw error;
        return res.send({ error, data:result, message: 'Success update!'});
    })
})

module.exports = app;