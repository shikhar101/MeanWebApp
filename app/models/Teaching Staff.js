var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeachingStaffSchema = new Schema({
    Name: {
        type: String,
        required: true
    },

})

mongoose.model('Teaching Staff',TeachingStaffSchema);
