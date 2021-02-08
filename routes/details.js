import express from "express";

import {
  createDetailsContent,
  getDetailsContent,
  updateDetailsContent,
} from "../controllers/details.js";

const router = express.Router();

router.get("/", getDetailsContent);
router.post("/", createDetailsContent);
router.patch("/", updateDetailsContent);

export default router;
