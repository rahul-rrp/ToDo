const express = require("express");
const router = express.Router();

// Import controller (Fixed path)
const { createTodo } = require("../controllers/createTodo");
const { getTodo } = require("../controllers/getTodo");
const { updateTodo} = require("../controllers/updateTodo");
const { deleteTodo} = require("../controllers/deleteTodo");

// Define API routes
// SYNTAX: router.{{method: get, post, etc.}}("your route", controller name);

// Create todos API route
router.post("/createTodo", createTodo);
router.get("/getTodos",getTodo);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);
module.exports = router;
