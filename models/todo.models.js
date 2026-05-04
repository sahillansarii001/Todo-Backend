import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, //Automatically adds createdAt and updatedAt fields
  },
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
