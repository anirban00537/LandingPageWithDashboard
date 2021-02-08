import mongoose from "mongoose";

const IntroSchema = mongoose.Schema({
  title: String,
  introId: Number,
  personName: String,
  description: String,
  image: String,
});

const IntroModel = mongoose.model("IntroModel", IntroSchema);

export default IntroModel;
