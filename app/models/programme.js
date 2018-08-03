var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');
var programmeSchema = new Schema({
  id: {
        type: Number,
        unique:true
      },
  Name:String,
  D_id:{
         type:Number,
         unique:true  
    }
});

mongoose.model('programme',programmeSchema);