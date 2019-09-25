# node-rest-crud-api
How to create a Rest CRUD API with Node.Js &amp; MySQL

Install Dependencies
In this project, I need 3 dependencies below:

1. Express (node.js framework)
2. MySQL (MySQL driver for node.js)\
3. Body-parser (middleware to handle post body request)

To install dependencies on node.js it can be done easily by using NPM (Node Package Manager).
You can run NPM in Terminal or Command Prompt.

Create a project and ente the project by typing the following command in the terminal
<br><b>mkdir node-rest-crud-api<br>
cd node-rest-crud-api</b>

Install node js express in your project by typing the following command in the terminal
<br><b>npm init --yes<br>
npm install</b>

Now install express js framework and MySQL driver with NPM by typing the following command in the terminal
<br><b>npm install --save express mysql body-parser</b>

Now create a database name <b>node_js_api</b> and use the <b>database.sql</b> to create user table and dump the sample data into it.

I will implement following APIs with methods name<br>
<b> Method | Url | Action</b><br>
GET | /users | fetch all users<br>
GET | user/1 | fetch user with id ==1<br>
POST | user | add new user<br>
PUT | user/1 | update user by id == 1<br>
DELETE | user/1 | delete user by id == 1<br>
