const express = require('express')
// connect to database
const db = require('./dataBase/connect')
// import database
const usersapi = require('./routes/usersAPI')
const postesapi = require('./routes/postsAPI')
// import routes
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
  })
app.use('/api', usersapi )
app.use('/api', postesapi )
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})