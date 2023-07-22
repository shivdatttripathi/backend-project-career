// require express for server
const express = require("express");
// express property transfer in app varible for easy to start server
const app = express();

// start to first get api cheacking working api or not

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//start server for listen
app.listen(4000, function () {
  console.log(`server is $ dev mode mode runnig is port no : $ 4000 `);
});
