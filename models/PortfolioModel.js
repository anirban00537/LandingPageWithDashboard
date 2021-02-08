import mongoose from "mongoose";

const PortfolioSchema = mongoose.Schema({
  portfolioId: Number,
  title: String,
  // title2: String,
  // title3: String,
  // title4: String,
  // title5: String,
  // title6: String,
  // title7: String,
  // title8: String,
  // img1: String,
  // img2: String,
  // img3: String,
  // img4: String,
  // img5: String,
  // img6: String,
  description: String,
  photo: String,
});

const PortfolioModel = mongoose.model("PortfolioModel", PortfolioSchema);

export default PortfolioModel;
