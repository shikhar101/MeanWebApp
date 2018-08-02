var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CoursesSchema = new Schema({
    Code: {
        type: Number,
        required: true
    },
    Name: {
        type: string
    }
})

mongoose.model('Courses',CoursesSchema);
