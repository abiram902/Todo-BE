const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
	{
		text: {
			type: String,
			required: true,
		},
		todoId: {
			type: Schema.Types.ObjectId,
			ref: "Todo",
			required: true,
		},
		likes: {
			type: [Schema.Types.ObjectId],
			ref: "User",
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ timestamps: true },
);

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
