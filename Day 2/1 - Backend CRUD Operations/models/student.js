import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
    },
    age:{
        type:Number,
        required:true
    },
    enrollment:{
        type:String,
        required:true
    }
})

// const dep

// const Student = new mongoose.model("Student", studentSchema);
// module.exports = Student;


export const student = mongoose.model("student" , studentSchema);
// module.exports = student;
