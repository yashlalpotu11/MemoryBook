const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
const port = 5000;
require('./connection')

//Middlewares
app.use(cors());
app.use(morgan("dev"));

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());

app.use('/posts', require('./Routes/postRouter'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

