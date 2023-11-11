const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: false,
		},
		date: {
			type: String,
			default: Date.now,
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: false,
		},
		movedBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: false,
		},
		assignedTo: {
			type: [Schema.Types.ObjectId],
			ref: "User",
			required: false,
		},
	},
	{ timestamps: true },
);

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
