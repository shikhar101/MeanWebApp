var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var OfferingSchama = new Schema({
    id: {
        type: string,
        required: true
    },
    EndDate: {
        type: Date
    },
    StartDate: {
        type: Date
    }
})

mongoose.model('Offering',OfferingSchama);