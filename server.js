const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// parse application/json
app.use(bodyParser.json());

//	default route
app.get('/', function (req, res) {
	return res.send(JSON.stringify({ error: true, message: 'hello' }))
});

//create database connection
const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'node_js_api'
});

//connect to database
conn.connect((err) =>{
	if( err ) throw err;
	console.log('Mysql Connected...');
}); 


//	Retrieve all users [GET]
app.get('/api/users', (req, res) => {
	let sql = "SELECT * FROM users";
	let query = conn.query(sql, (err, results) => {
		if( err ) throw err;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

//	Retrieve user with id [GET] 
app.get('/api/user/:id', (req, res) => {
	let user_id = req.params.id;
	if( isNaN(user_id) ) {
		res.send(JSON.stringify({"status": 400, "error": null, "response": 'Please provide correct user_id'}));
	} else {
		let sql = "SELECT * FROM users WHERE id=" + user_id;
		let query = conn.query(sql, (err, results) => {
			if( err ) throw err;
			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
		});
	}
});

//	Add a new user [POST]
app.post('/api/user', (req, res) => {
	let data = {name: req.body.name, email: req.body.email};
	let sql = "INSERT INTO users SET ?";
	let query = conn.query(sql, data,(err, results) => {
		if( err ) throw err;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

//	Update user with id [PUT]
app.put('/api/user/:id',(req, res) => {
	let sql = "UPDATE users SET name='"+req.body.name+"', email='"+req.body.email+"' WHERE id="+req.params.id;
	let query = conn.query(sql, (err, results) => {
		if( err ) throw err;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

//	Delete user [DELETE]
app.delete('/api/user/:id',(req, res) => {
	let sql = "DELETE FROM users WHERE id="+req.params.id+"";
	let query = conn.query(sql, (err, results) => {
		if(err) throw err;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

// Server listening - Set Port
app.listen(3000, function () {
	console.log('Node app is running on port 3000');
});

module.exports = app;