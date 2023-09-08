const express = require("express");
const Router = require("./routers");
const app = express();
// const cors = require("cors");

const port = process.env.PORT || 5000;

// app.use(express.static("public"));
// app.use(cors());
app.use(express.json());
app.use(Router);

app.listen(port, () => console.log(`now listening on port ${port}`));
