import express from "express";

const app = express();

const tasks = [];


// Routes

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.post("/tasks", (req, res) => {
  res.send("newTask");
});



export default app;
