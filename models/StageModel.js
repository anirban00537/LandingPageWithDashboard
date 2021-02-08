import mongoose from "mongoose";

const StageSchema = mongoose.Schema({
  stageId: Number,
  des1: String,
  des2: String,
  des3: String,
});

const StageModel = mongoose.model("StageModel", StageSchema);

export default StageModel;
