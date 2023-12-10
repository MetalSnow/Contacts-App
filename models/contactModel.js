const mongoose = require("mongoose");

const contactShema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      require: [true, "please add the contact name"],
    },
    email: {
      type: String,
      require: [true, "please add the contact email adress"],
    },
    phone: {
      type: String,
      require: [true, "please add your contact phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactShema);
