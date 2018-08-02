var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var OfferingSchama = new Schema({
    EndDate: {
        type: Date
    },
    StartDate: {
        type: Date
    }
})

mongoose.model('Offering',OfferingSchama);
