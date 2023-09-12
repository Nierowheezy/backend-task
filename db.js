const mongoose = require("mongoose");

// const dbUri = "mongodb://localhost:27017/hng_db";

const dbUri =
  "mongodb+srv://nierowheezy:admin1234@cluster0.kgg5n.mongodb.net/hng_db?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

module.exports = () => {
  return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
