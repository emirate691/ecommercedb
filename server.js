const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const fileUpload = require("express-fileupload");

require("dotenv").config();

const app = express();

var port = 3000;
app.use(bodyParser.json());
app.use(cors());

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "welcome to topnorch store" });
});

require("./routes/product.route.js");

app.listen(port, () => {
  console.log("server is runing on port" + port);
});
