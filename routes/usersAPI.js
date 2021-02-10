const express = require('express')
const router = express.Router() 
// route pas principale de express
router.get('/users', (req, res) => {
    res.send('get all users!')
})
router.get('/users/:id', (req, res) => {
    res.send('get user by id')
})
router.post('/users', (req, res) => {
    console.log(req.body);
    res.send('Add users!')
})
router.delete('/users', (req, res) => {
    res.send('Delete users!')
})
router.put('/users', (req, res) => {
    res.send('Update users')
})
 
module.exports = router
// export de router
