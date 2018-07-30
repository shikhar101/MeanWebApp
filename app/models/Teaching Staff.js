var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeachingStaffSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    Name: {
        type: string,
        required: true
    },

})

mongoose.model('Teaching Staff',TeachingStaffSchema);