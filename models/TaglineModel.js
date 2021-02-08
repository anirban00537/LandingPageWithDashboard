import mongoose from "mongoose";

const TaglineSchema = mongoose.Schema({
  title: String,
  tagId: Number,
  changableText: String,
  description: String,
  image: String,
});

const TaglineModel = mongoose.model("TaglineModel", TaglineSchema);

export default TaglineModel;
