// console.log("Starting");

const express = require('express');

const jobRoutes = require('./routes/job');
const mongoose = require('mongoose');

const app = express();

mongoose
.connect("mongodb+srv://rupesh0511:rpachapach@cluster0.ea1xhjr.mongodb.net/")
.then(()=>{
    console.log("databse connected succesfully")
})
.catch((err)=>{
    console.log("Error connecting",err);
})


app.use(express.json())

app.use("/api/v1/job/",jobRoutes);


app.listen(10000,()=>{

    console.log("server is up and running");

})