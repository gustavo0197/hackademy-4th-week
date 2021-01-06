import { Schema, model } from "mongoose";

const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: false, default: "" },
});

export default model("Contact", ContactSchema);
