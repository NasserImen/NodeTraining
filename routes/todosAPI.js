const express = require('express')
const TodoSchema = require('../models/todoSchema');
const router = express.Router();

// route pas principale de express
router.get('/todos', (req, res) => {
    res.send('get all todos!')
})
router.get('/todos/:id', async (req, res) => {
    const find = await TodoSchema.findById(req.params.id,req.body)
    res.send('get todo by id')
})
router.post('/todos', async (req, res) => {
    console.log(req.body);
    const newTodo = await TodoSchema.create(req.body)
    res.send('Add todo!')
})
router.delete('/todos/:id',async (req, res) => {
    console.log(req.body);
    const deleteTodo = await TodoSchema.findByIdAndDelete(req.params.id,{new : true})
    res.send('Delete todo!')
})
router.put('/todos/:id', async (req, res) => {
    const updateTodo = await TodoSchema.findByIdAndUpdate(req.params.id,req.body,{new : true})
    res.json(updateTodo)
})

    
module.exports = router
// export de router