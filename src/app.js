import express from "express";
import { v4 } from "uuid";

const app = express();

const tasks = [];


// Middlewares
app.use(express.json());


// Routes

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: v4(), title, description };
  res.json(newTask);
});


export default app;
