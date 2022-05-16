const mangoose = require("mangoose");
const { ObjectId } = mangoose.Schema;

const userSchema = new mangoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: "subscriber",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    // wishlist:[{type: ObjectId ,ref:"product"}],
  },
  { timestamps: true }
);
module.exports = mangoose.module("User", userSchema);
