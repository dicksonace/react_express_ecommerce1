const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const usersRouter = require("./routers/UsersRouter.js");
const itemsRouter = require("./routers/ItemsRouter.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/users", usersRouter);
app.use("/api/items",itemsRouter);

app.listen(5000);
