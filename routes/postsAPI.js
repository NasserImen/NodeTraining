const express = require('express')
const router = express.Router() 
// route pas principale de express
router.get('/posts', (req, res) => {
    res.send('get all posts!')
})
router.get('/posts/:id', (req, res) => {
    res.send('get user by id')
})
router.post('/posts', (req, res) => {
    res.send('Add posts!')
})
router.delete('/posts', (req, res) => {
    res.send('Delete posts!')
})
router.put('/posts', (req, res) => {
    res.send('Update posts')
})

    
module.exports = router
// export de router