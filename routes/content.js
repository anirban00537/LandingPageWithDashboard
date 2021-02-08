import express from "express";
import requireLogin from "../middleware/requireMiddleware.js";

import {
  getTagContent,
  createTagContent,
  updateTagContent,
} from "../controllers/content.js";

const router = express.Router();

router.get("/", getTagContent);
router.post("/", createTagContent);
router.patch("/", updateTagContent);

export default router;
