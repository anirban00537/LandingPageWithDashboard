import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

const ServiceModel = mongoose.model("ServiceModel", serviceSchema);

export default ServiceModel;
