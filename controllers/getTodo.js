//import from model
const Todo=require("../models/Todo");

exports.getTodo=async(req,res) =>{
    try{
         //fetch  all todo items from database
         //mongoose lib
         const todos=await Todo.find({});

         //response
         res.status(200)
         .json({
            success:true,
            data:todos,
            message:"Entire todo data is fetch",
         })

    }
    catch(err){
               console.error(err);
               res.status(500)
.json({
                success: false,
               message: " server error.",
               error: err.message,
               })
    }
}