const express = require("express");
const todoRoutes = require("./todoRoutes");
const userRoutes = require("./userRoutes");
const authMiddleWare = require("../middlewares/authMiddleWare");

const router = express.Router();

router.use("/todos", authMiddleWare, todoRoutes);
router.use("/users", userRoutes);

module.exports = router;
