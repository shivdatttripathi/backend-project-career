const express = require("express");
const userRouter = express.Router();
const { getApi } = require("../Controller/userController");

userRouter.get("/getApi", getApi);
module.exports = userRouter;
