// require express for server
const express = require("express");
// express property transfer in app varible for easy to start server
const app = express();

// config dotenv
require("dotenv").config(); //local

//config router

const userRouter = require("./Router/userRouter");
app.use("/api/user/v1", userRouter);

// start to first get api cheacking working api or not

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let PORT = process.env.PORT || 4000;

//start server for listen
app.listen(PORT, function () {
  DEV_MODE = "DEVELOPMENT MODE ";
  DEV_MODE = "DEVELOPMENT MODE ";
  console.log(`server is ${process.env.DEV_MODE} runnig is port no : ${PORT} `);
});
