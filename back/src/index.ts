import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {getAll } from "./routes/members";
import { AppDataSource } from "./config/config-db";

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

AppDataSource.initialize().then(async () => {
    app.use("/api/members", getAll);
})



app.listen(port, () => {
    console.log(`Le serveur est démarré sur le port ${port}`);
  });
  