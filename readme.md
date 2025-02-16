# 📝 Todo API  

A simple and efficient RESTful API for managing Todo tasks using **Node.js**, **Express.js**, and **MongoDB**. This API follows the **CURED** approach:  

✅ **C**reate a Todo  
✅ **U**pdate a Todo  
✅ **R**ead all Todos  
✅ **E**dit a Todo (Update specific fields)  
✅ **D**elete a Todo  

---

## 🚀 Features  
- Create a new Todo  
- Retrieve all Todos  
- Update an existing Todo  
- Edit specific fields in a Todo  
- Delete a Todo  

---

## 📂 Project Structure  

/project-root ├── controllers/ │ ├── createTodo.js │ ├── getTodo.js │ ├── updateTodo.js │ ├── deleteTodo.js ├── models/ │ ├── Todo.js ├── routes/ │ ├── todoRoutes.js ├── server.js ├── package.json └── README.md

## 🛠️ Setup  

### 1️⃣ Install Dependencies  
```bash
npm install express mongoose dotenv cors


2️⃣ Set Up Environment Variables
Create a .env file in the project root and add:
MONGO_URI=your_mongodb_connection_string
PORT=5000

3️⃣ Start the Server
node server.js

📌 API Endpoints
Method	Endpoint	Description
POST	/api/todos	Create a new Todo
GET	/api/todos	Retrieve all Todos
PUT	/api/todos/:id	Update an existing Todo
PATCH	/api/todos/:id	Edit specific fields in a Todo
DELETE	/api/todos/:id	Delete a Todo

🔥 Example Requests
✅ Create a Todo
POST /api/todos
Content-Type: application/json

{
  "title": "Learn Express.js",
  "description": "Understand the basics of Express.js for building APIs"
}

🔍 Get All Todos
GET /api/todos

✏️ Update a Todo
PUT /api/todos/:id
Content-Type: application/json

{
  "title": "Master Express.js",
  "description": "Deep dive into middleware and routing"
}

🛠 Edit a Todo (Partial Update)
PATCH /api/todos/:id
Content-Type: application/json

{
  "title": "Learn MongoDB"
}

❌ Delete a Todo
DELETE /api/todos/:id

🏗 Technologies Used
Node.js
Express.js
MongoDB (Mongoose)
RESTful API Design

🎯 Future Enhancements
Add User Authentication (JWT)
Implement Task Prioritization
Add Due Date and Reminders

📜 License
This project is open-source and available under the MIT License.


🎉 Happy Coding! 🚀

This file is now well-structured, informative, and ready to be included in your project! Let me know if you need any modifications. 😊🚀
