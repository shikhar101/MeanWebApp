var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var jwt = require('jsonwebtoken');

var ResultSchema = new Schema({
    id : {
        type: Number,
        unique: true
    },
    Score : Number,
    D_id: String,
});

mongoose.model('Result',ResultSchema);