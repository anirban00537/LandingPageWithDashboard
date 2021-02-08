import express from "express";

import {
  createServiceContent,
  deleteServicePost,
  getServiceContent,
} from "../controllers/service.js";

const router = express.Router();

router.get("/", getServiceContent);
router.post("/", createServiceContent);
router.delete("/:id", deleteServicePost);

export default router;
