import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import 'reflect-metadata';
import { AppDataSource } from "./config/config-db";
import { routerMembers } from "./routes/members";
import { routerCourses } from "./routes/courses";

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

AppDataSource.initialize().then(async () => {
    app.use("/api/members", routerMembers);
    app.use("/api/cours", routerCourses)
})



app.listen(port, () => {
    console.log(`Le serveur est démarré sur le port ${port}`);
  });
  