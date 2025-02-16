require("dotenv").config({ path: "./.env" });

const express = require("express");

const dbConnect = require('./config/database');  // ✅ Correct import
const app = express();

// loads environment variables from a .env file into process.env
require("dotenv").config();
console.log("🔍 DATABASE_URL:", process.env.DATABASE_URL);
const PORT = process.env.PORT || 4000; // if we are unable to fetch PORT from process.env then 4000 is used by default

// middleware to parse json request body
app.use(express.json()); // NOTE: we previously used bodyParser

//import routes for TODO API
const todoRoutes = require("./routes/todo");

//mount the todo API routes
app.use("/api/v1", todoRoutes); // url will be like => PORT NO:/api/v1/{{our route}}

//start server
app.listen(PORT, () => {
  console.log(`Server successfully started at port ${PORT}`);
});

//connect to the databas
dbConnect();

//default Route
app.get("/", (req, res) => {
  res.send(`<h1> This is Homepage.</h1>`);
});