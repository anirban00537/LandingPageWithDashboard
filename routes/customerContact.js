import express from "express";

import {
  createCustomerContactContent,
  getCustomerContactContent,
} from "../controllers/customerContact.js";
const router = express.Router();
router.get("/", getCustomerContactContent);
router.post("/", createCustomerContactContent);

export default router;
