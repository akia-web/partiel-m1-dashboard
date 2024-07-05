import express from "express";
import { getAllMembers } from "../controllers/membersController";
export const routerMembers = express.Router();

routerMembers.get('/', getAllMembers)