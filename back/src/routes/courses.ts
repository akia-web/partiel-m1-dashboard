import express from "express";
import { getAllCourses } from "../controllers/coursesController";

export const routerCourses = express.Router();

routerCourses.get('/', getAllCourses)