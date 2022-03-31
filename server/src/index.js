const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const todoController = require("./controllers/todo.controller");
const { signUp, signIn } = require("./controllers/auth.controller");
app.post("/signup", signUp);
app.post("/signin", signIn);

app.use("/", todoController);

module.exports = app;
