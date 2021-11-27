// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config({ path: `${__dirname}/config.env` });
// const app = require("./app");

// const DB = process.env.DATABASE.replace(
//   `<DATABASE_PASSWORD>`,
//   process.env.DATABASE_PASSWORD
// );

// //  Returns the promise
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//   })
//   .then(() => console.log("Connection Successful..."))
//   .catch((error) => console.log(error));


const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Tourbook", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database is connected');
}).catch(err => {
    console.log(err);
});


