const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");



const app = express();
// const port = process.env.PORT || 5000;
require('./connection')

//Middlewares
app.use(cors());
app.use(morgan("dev"));

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());

app.use('/posts', require('./Routes/postRouter'));

if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

