const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(3001, () => {
	console.log("Example app listening on port 3001!");
});
