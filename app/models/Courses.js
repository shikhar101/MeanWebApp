var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CoursesSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    Code: {
        type: Number,
        required: true
    },
    Name: {
        type: string
    }
})

mongoose.model('Courses',CoursesSchema);