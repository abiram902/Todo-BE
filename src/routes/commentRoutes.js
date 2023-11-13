const express = require("express");
const {
	getAllComments,
	getCommentById,
	createComment,
	updateComment,
	deleteComment,
} = require("../controllers/commentControllers");

const router = express.Router();

router.get("/", getAllComments);

router.get("/:id", getCommentById);

router.post("/", createComment);

router.put("/:id", updateComment);

router.delete("/:id", deleteComment);

module.exports = router;
