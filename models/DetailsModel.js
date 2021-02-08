import mongoose from "mongoose";

const DetailsSchema = mongoose.Schema({
  detailsId: Number,
  title1: String,
  title2: String,
  title3: String,
  des1: String,
  des2: String,
  des3: String,
  image: String,
});

const DetailsModel = mongoose.model("DetailsModel", DetailsSchema);

export default DetailsModel;
