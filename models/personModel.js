const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const personSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    Name: {
      type: String,
      required: [true, "Please enter your name!"],
      trim: true,
    },
    __v: { type: Number, select: false },
  },
  {
    _id: false,
  }
);

personSchema.plugin(AutoIncrement);
module.exports = mongoose.model("Persons", personSchema);
