const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

module.exports = {
    async index(req, res){
        const todos = await Todo.find();
        return res.json(todos);
    },
    async store(req, res) {
        const todos = await Todo.create(req.body);
        return res.json(todos);
    },
    async destroy(req, res){
        await Todo.findByIdAndRemove(req.params.id);
        res.send();
    }
};