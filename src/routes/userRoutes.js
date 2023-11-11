const express = require("express");
const {
	signupUser,
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserById,
	loginUser,
} = require("../controllers/userControllers");

const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.put("/:id", updateUserById);

router.delete("/:id", deleteUserById);

router.post("/", signupUser);

router.post("/login", loginUser);

module.exports = router;
