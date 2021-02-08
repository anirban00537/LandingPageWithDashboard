import express from "express";

import {
  createTeamContent,
  deleteTeamPost,
  getTeamContent,
} from "../controllers/team.js";

const router = express.Router();

router.get("/", getTeamContent);
router.post("/", createTeamContent);
router.delete("/:id", deleteTeamPost);

export default router;
