import mongoose from "mongoose";

const CustomerContactSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const CustomerContactModel = mongoose.model(
  "CustomerContactSchema",
  CustomerContactSchema
);

export default CustomerContactModel;
