// Import the model
const Todo = require("../models/Todo");

// Define route handler
exports.createTodo = async (req, res) => {
  try {
    // Extract title and description from request body
    const { title, description } = req.body;

    // Validate input
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required.",
      });
    }

    // Create a new Todo and insert into the database
    const response = await Todo.create({ title, description });

    // Send a JSON response with a success flag
    res.status(201).json({ // 201 = Created
      success: true,
      data: response,
      message: "Todo entry created successfully.",
    });

  } catch (err) {
    console.error("Error creating Todo:", err);

    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};
