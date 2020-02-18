const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect("mongodb://localhost/testeFortBrasil", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

require("./src/models/Estabelecimento");

app.use("/estabelecimento", require("./src/routes"));
app.use("/auth", require("./src/controllers/authController"));

app.listen(3131);
