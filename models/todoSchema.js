var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 const TodoSchema = new Schema ({
     title: String,
     description : String
 })

module.exports = mongoose.model('Todo', TodoSchema)
