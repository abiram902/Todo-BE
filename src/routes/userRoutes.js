const express = require("express");
const { signupUser } = require("../controllers/userControllers");

const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello World! from user routes");
});

router.post("/", signupUser);

module.exports = router;
