const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('../db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

	const todo = new Todo({
		text: req.body.text
	});

	todo.save().then( (result) => {
		res.send(result);
	}, (err) => {
		res.status(400).send(err);
	})
});

app.get('/todos', (req, res) => {

	Todo.find().then((todos) => {
		res.send({
			todos
		});
	}, (e) => {
		res.send(400).send(e);
	})
})

app.post('/users', (req, res) => {

	const user1 = new User({
		email: req.body.email
	});

	user1.save().then( (result) => {
		res.send(result);
	}, (err) => {
		res.status(400).send(err);
	});

})

app.listen(8080, () => {
	console.log('Server is up');
});