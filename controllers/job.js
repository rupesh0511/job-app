//controllers naya section is for logic part function jisse api create krte hai
//routes me routes saare and yaha functions 
const jobModel = require('../models/job');

const createJob = async(req,res)=>{
    try{
        console.log(req.body);
    //insertion node se aise karenge db me insertion object banake 2 step process
    //baaki find delete etc jobmodel.find,delete etc aise simply
    const newJob=new jobModel(req.body);
    await newJob.save(); //yaha se id nikaal skte h

    res.json({
        success:true,
        mesaage:"job created successfully"
    })
    }catch(err){
        res.status(400).json({
            success:false,
            message:"something went wrong",
        })
    }

    
}
//database operations are asynchronous that's why we use async await
const getJob = async(req,res)=>{
    const joblist = await jobModel.find({});
    console.log(joblist);
    res.json({
        success:true,
        mesaage:"Dummy job getapi",
        result:joblist
    })
}

const editJob = async(req,res)=>{
    console.log(req.body);
    await jobModel.updateOne({_id: req.body._id},{$set:req.body}); //another way of writing this below
    // jobModel.findByIdAndUpdate(req.body._id,req.body);
    res.json({
        success:true,
        message:"updated successfully",
    });
};

const deleteJob = async(req,res)=>{
    try{
        await jobModel.findByIdAndDelete(req.body._id);
        res.json({
            success:true,
            message:"deleted successfully", 
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"something went wrong"
        })
    }
};
module.exports = {
    createJob,
    getJob,
    editJob,
    deleteJob,
};