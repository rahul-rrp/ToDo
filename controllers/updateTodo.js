//import from model
const Todo=require("../models/Todo");

// Define route handler
exports.updateTodo = async (req, res) => {
  try {
       const{id}=req.params;
       const{title,description}=req.body;

       const todo = await Todo.findByIdAndUpdate(
        id,  // ✅ Pass the ID directly as a string
        { title, description, updatedAt: Date.now() },
        { new: true }  // ✅ Ensures updated document is returned
      );
      
       res.status(200)
         .json({
            success:true,
            data:todo,
            message:"Updated successfully",
         })
  } catch (err) {
    console.error(err);
    res.status(500)
.json({
     success: false,
    message: " server error.",
    error: err.message,
    })
  }
};
