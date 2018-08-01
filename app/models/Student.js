var mongoose = require('mongoose');
var Scheme = mongoose.Schema;

var StudentSchema = new Schema({
    Reg_no: {
    type: String,
    required: true,
    unique: true
    },
    Name: String,
    CurrentSem: Number,
    username: String
});


mongoose.model('Student',StudentSchema);
