const Todo = require("../model/Todo");

const getAllTodoController = async (req, res) => {
	try {
		const todos = await Todo.find();
		res.status(200).json(todos);
	} catch (error) {
		res.status(500).json({ error: error });
	}
};

const getTodoByIdController = async (req, res) => {
	try {
		const todos = await Todo.findById(req.params.id);
		res.status(200).json(todos);
	} catch (error) {
		res.status(500).json({ error });
	}
};

const createTodoController = async (req, res) => {
	try {
		const { title, status, description, date } = req.body;
		const todo = new Todo({
			title,
			status,
			description,
			date,
		});
		await todo.save();
		res.status(201).json(todo);
	} catch (error) {
		res.status(500).json({ error });
	}
};

const editTodoController = async (req, res) => {
	try {
		const { id } = req.params;
		const { body } = req;
		const todo = await Todo.findByIdAndUpdate(id, {
			...body,
		});
		res.status(200).json(todo);
	} catch (error) {
		res.status(500).json({ error });
	}
};

const deleteTodoController = async (req, res) => {
	try {
		const { id } = req.params;
		await Todo.findByIdAndDelete(id);
		res.status(200).json({ message: "Deleted successfully" });
	} catch (error) {
		res.status(500).json({ error });
	}
};

module.exports = {
	getAllTodoController,
	getTodoByIdController,
	createTodoController,
	editTodoController,
	deleteTodoController,
};
