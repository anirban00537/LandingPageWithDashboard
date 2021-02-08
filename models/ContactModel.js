import mongoose from "mongoose";

const ContactSchema = mongoose.Schema({
  contactId: Number,
  address: String,
  phone1: String,
  phone2: String,
  email: String,
  copyright: String,
  brainbox: String,
});

const ContactModel = mongoose.model("ContactModel", ContactSchema);

export default ContactModel;
