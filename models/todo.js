import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean,
    Days: Number
  });

  const todo = mongoose.model('todo', todoSchema);  // todo spelling mistake

  export  default todo; // it should be "todo" not tudo Still not working 
  // give terminal access
