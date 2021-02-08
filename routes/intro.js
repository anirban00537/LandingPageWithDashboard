import express from "express";
import requireLogin from "../middleware/requireMiddleware.js";

import {
  createIntroContent,
  getIntroContent,
  updateIntroContent,
} from "../controllers/intro.js";

const router = express.Router();

router.get("/", getIntroContent);
router.post("/", createIntroContent);
router.patch("/", updateIntroContent);

export default router;
