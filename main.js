import mongoose from "mongoose";

import express from "express";

import todo from "./models/todo.js";


let conn = await mongoose.connect("mongodb://localhost:27017/");

// const express = require('express')
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const newTodo = new todo({
    title: "1",
    desc: "Description of the todo",
    isDone: false,
    Days: 3
  });
  newTodo.save();  // spelling mistake, now run
  res.send(" Todo created!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// startServer() // what is this?,GETTING ERRRO APP CRASHED 
// Not defined startserver, but you are using it here