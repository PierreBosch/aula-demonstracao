const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const UserController = require("./src/app/controllers/UserController");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/usuarios", UserController.show);

app.listen(3000);
