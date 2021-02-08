import express from "express";

import {
  createPortfolioContent,
  getPortfolioContent,
  deletePortfolioPost,
} from "../controllers/portfolio.js";

const router = express.Router();

router.get("/", getPortfolioContent);
router.post("/", createPortfolioContent);
router.delete("/:id", deletePortfolioPost);

export default router;
