import express from "express";

import {
  createContactContent,
  getContactContent,
  updateContactContent,
} from "../controllers/contact.js";

const router = express.Router();

router.get("/", getContactContent);
router.post("/", createContactContent);
router.patch("/", updateContactContent);

export default router;
