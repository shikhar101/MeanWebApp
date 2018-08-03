var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');
var departmentSchema = new Schema({
 id:{
        type:Number,
        unique:true
    },
 Name:String,
 F_id:{
        type:Number,
        unique:true
      }

    
});
mongoose.model('department',departmentSchema);