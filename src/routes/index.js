const express = require("express");
const todoRoutes = require("./todoRoutes");
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");
const authMiddleWare = require("../middlewares/authMiddleWare");

const router = express.Router();

router.use("/todos", authMiddleWare, todoRoutes);
router.use("/users", userRoutes);
router.use("/comments", authMiddleWare, commentRoutes);

module.exports = router;
