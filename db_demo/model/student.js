const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const StudentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        default:0
    },
    gender:{
        type:Boolean,
        default:false
    },
    classroom:{
        type:String,
        required:true
    },
    create_time:{
        type:Date,
        default:Date.now
    }
});

const Student=mongoose.model('student',StudentSchema)

module.exports=Student;