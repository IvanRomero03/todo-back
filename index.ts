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
  res.send("Hello World!");
});

app.post("/getTodos", (req, res) => {
  getTodosCallback(con, req, res);
});

const getValidUserCallback = require("./getValidUser.ts");

app.post("/getValidUser", (req, res) => {
  getValidUserCallback(con, req, res);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
