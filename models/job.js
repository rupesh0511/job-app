//schema define karenge mongo k liye 

const mongoose = require('mongoose');



const jobSchema={
    title:{
        type: String,
        required: true,
        // unique: true, //field unique rakhne k liye .
        //but ye beech beech me nai krna kyuki phir ye allow kr dega
        //shuru me hi decide krna hota h
    },
    description:{  
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    salary:{
        type: Number,
        required: true,
        default: 0,
    }
};
const jobModel=mongoose.model("jobs",jobSchema);//jobs(model) hamare database ka collection h
module.exports = jobModel;