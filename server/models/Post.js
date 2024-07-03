import mongoose, { mongo } from "mongoose";

const PostSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		picturePath: {
			type: String,
			default: "",
		},
		likes: {
			type: Map,
			of: Boolean,
			default: {},
		},
		comments: {
			type: Array,
			default: [],
		},
	},
	{ timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;