const express = require("express");
const app = express();
const indexRoutes = require("./routes");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use("/api", indexRoutes);

const PORT = process.env.PORT;

mongoose
	.connect(process.env.MONGO_URI, {
		dbName: "Todo-app",
	})
	.then(() => console.log("Connected to DB"))
	.catch((err) => console.error(err));

app.listen(PORT, () => {
	console.log("Example app listening on port " + PORT);
});
