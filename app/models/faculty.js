var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');
var facultySchema = new Schema({
id:{
     type: Number,
     unique:true    
   },
Name:String
});
mongoose.model('faculty',facultySchema);