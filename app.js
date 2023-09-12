const express = require("express");
const Router = require("./routers");

//local imports
const connectDb = require("./db.js");
const { errorHandler } = require("./middlewares");

const app = express();
// const cors = require("cors");

const port = process.env.PORT || 5000;

// app.use(cors());
app.use(express.json());
app.use(Router);
app.use(errorHandler);

connectDb()
  .then(() => {
    console.log("db connection succeeded.");
    app.listen(port, () => console.log(`now listening on port ${port}`));
  })
  .catch((err) => console.log(err));
