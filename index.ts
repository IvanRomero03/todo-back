const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const connection = require("./getConnection.ts");

const con = connection();

const getTodosCallback = require("./getTodos.ts");

app.get("/", (req, res) => {
  res.send(
    "Hello There! This is a Todo API for my project. You can find the actual page here:"
  );
});

app.post("/getTodos", (req, res) => {
  getTodosCallback(con, req, res);
});

const getValidUserCallback = require("./getValidUser.ts");

app.post("/getValidUser", (req, res) => {
  getValidUserCallback(con, req, res);
});

const createUserCallback = require("./createUser.ts");

app.post("/createUser", (req, res) => {
  createUserCallback(con, req, res);
});

const getUniqueUsernameCallback = require("./getUniqueUsername.ts");

app.post("/getUniqueUsername", (req, res) => {
  getUniqueUsernameCallback(con, req, res);
});

const getTodoCallback = require("./getTodo.ts");

app.post("/getTodo", (req, res) => {
  getTodoCallback(con, req, res);
});

const createPriorityCallback = require("./createPriority.ts");

app.post("/createPriority", (req, res) => {
  createPriorityCallback(con, req, res);
});

const createTodoCallback = require("./createTodo.ts");

app.post("/createTodo", (req, res) => {
  createTodoCallback(con, req, res);
});

const getUserPrioritiesCallback = require("./getUserPriorities.ts");

app.post("/getUserPriorities", (req, res) => {
  getUserPrioritiesCallback(con, req, res);
});

const getPriorityIdCallback = require("./getPriorityId.ts");

app.post("/getPriorityId", (req, res) => {
  getPriorityIdCallback(con, req, res);
});

const getTodosByStatusCallback = require("./getTodosByStatus.ts");

app.post("/getTodosByStatus", (req, res) => {
  getTodosByStatusCallback(con, req, res);
});

const getTodosByPriorityCallback = require("./getTodosByPriority.ts");

app.post("/getTodosByPriority", (req, res) => {
  getTodosByPriorityCallback(con, req, res);
});

const getUserPrioritesIdsCallback = require("./getUserPrioritesIds.ts");

app.post("/getUserPrioritesIds", (req, res) => {
  getUserPrioritesIdsCallback(con, req, res);
});

const updateTodoCallback = require("./updateTodo.ts");

app.post("/updateTodo", (req, res) => {
  updateTodoCallback(con, req, res);
});

const deleteTodoCallback = require("./deleteTodo.ts");

app.post("/deleteTodo", (req, res) => {
  deleteTodoCallback(con, req, res);
});

const deletePriorityCallback = require("./deletePriority.ts");

app.post("/deletePriority", (req, res) => {
  deletePriorityCallback(con, req, res);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
