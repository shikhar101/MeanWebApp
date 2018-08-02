var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var jwt = require('jsonwebtoken');

var ResultSchema = new Schema({
    Score : {
        type: Number,
        required: true
    },
    D_id: String,
});

mongoose.model('Result',ResultSchema);
