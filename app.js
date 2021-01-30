require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const usersRoute = require("./routes/users");

app.use(bodyParser.json());
app.use("/users", usersRoute);
mongoose.connect(process.env.DATABASE_CONNECTION, { useNewUrlParser: true });

app.listen(3000);
