import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  checkbox: Boolean,
  signature: String,
  otherFields: Object,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Form", formSchema);