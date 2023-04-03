const express = require("express");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskControllers");
const router = express.Router();

//Route to create a task in the database
router.post("/api/tasks", createTask);
//Route to get All tasks
router.get("/api/tasks", getTasks);
router.get("/api/tasks/:id", getTask);
router.delete("/api/tasks/:id", deleteTask);
router.put("/api/tasks/:id", updateTask);

module.exports = router;
