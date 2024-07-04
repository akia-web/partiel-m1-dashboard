
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Member } from "../entity/members";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "mysecretpassword",
    database: "mydatabase",
    synchronize: false,
    logging: false,
    entities: [Member],
    migrations: [],
    subscribers: [],
});