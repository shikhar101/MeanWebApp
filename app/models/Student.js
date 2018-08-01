var mongoose = require('mongoose');
var Scheme = mongoose.Schema;

var StudentSchema = new Schema({
    id: {
        type:  Number,
        unique: true
    },
    Reg_no: {
    type: String,
    reqyured: true,
    unique: true
    },
    Name: String,
    CurrentSem: Number,
    username: String
});


mongoose.model('Student',StudentSchema);
