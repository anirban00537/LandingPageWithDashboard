import express from "express";

import {
  createAboutsContent,
  getAboutsContent,
  updateAboutsContent,
} from "../controllers/about.js";

const router = express.Router();

router.get("/", getAboutsContent);
router.post("/", createAboutsContent);
router.patch("/", updateAboutsContent);

export default router;
