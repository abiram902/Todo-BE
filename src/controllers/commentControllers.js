const Comment = require("../model/Comment");

const getAllComments = async (req, res) => {
	try {
		const comments = await Comment.find();
		res.status(200).json(comments);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const getCommentById = async (req, res) => {
	try {
		const comment = await Comment.findById(req.params.id);
		res.status(200).json(comment);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const createComment = async (req, res) => {
	try {
		const { text, likes, todoId, user } = req.body;
		const comment = new Comment({
			text,
			likes: likes || [],
			todoId,
			createdBy: user.id,
		});
		await comment.save();
		res.status(201).json(comment);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const updateComment = async (req, res) => {
	try {
		const { body } = req;
		const { id } = req.params;
		const updatedComment = await Comment.findByIdAndUpdate(id, body);
		res.status(200).json(updatedComment);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const deleteComment = async (req, res) => {
	try {
		const { id } = req.params;
		await Comment.findByIdAndDelete(id);
		res.status(200).json("Deleted Successfully");
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	getAllComments,
	getCommentById,
	createComment,
	updateComment,
	deleteComment,
};
