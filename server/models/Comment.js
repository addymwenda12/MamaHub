import mongoose from 'mongoose'

const CommentSchema = mongoose.Schema(
  {
    useId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", required: true
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post", required: true
    },
    text: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;