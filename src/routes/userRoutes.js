const express = require("express");
const {
	signupUser,
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserById,
	loginUser,
} = require("../controllers/userControllers");
const authMiddleWare = require("../middlewares/authMiddleWare");

const router = express.Router();

router.get("/", authMiddleWare, getAllUsers);

router.get("/:id", authMiddleWare, getUserById);

router.put("/:id", authMiddleWare, updateUserById);

router.delete("/:id", authMiddleWare, deleteUserById);

router.post("/", signupUser);

router.post("/login", loginUser);

module.exports = router;
