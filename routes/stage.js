import express from "express";

import {
  createStageContent,
  getStageContent,
  updateStageContent,
} from "../controllers/stage.js";

const router = express.Router();

router.get("/", getStageContent);
router.post("/", createStageContent);
router.patch("/", updateStageContent);

export default router;
