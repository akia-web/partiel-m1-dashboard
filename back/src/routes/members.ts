import express from "express";
import { getAllMembers } from "../controllers/membersController";
const router = express.Router();

export const getAll = router.get('/', getAllMembers)