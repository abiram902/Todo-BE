const express = require("express");
const {
	createTodoController,
	getAllTodoController,
	editTodoController,
	deleteTodoController,
	getTodoByIdController,
} = require("../controllers/todoControllers");
const authMiddleware = require("../middlewares/authMiddleWare");

const router = express.Router();

router.get("/", getAllTodoController);

router.get("/:id", getTodoByIdController);

router.post("/", createTodoController);

router.put("/:id", editTodoController);

router.delete("/:id", deleteTodoController);

module.exports = router;
