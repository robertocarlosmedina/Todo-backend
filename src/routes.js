const express = require('express');
const routes = express.Router();

const TodoController = require('./controlles/TodosController');
routes.get('/todos', TodoController.index);
routes.post('/todos', TodoController.store);
routes.delete('/todos/:id', TodoController.destroy);

module.exports = routes;