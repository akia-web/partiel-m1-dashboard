
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Member } from "../entity/members";
import { Contact } from "../entity/contact";
import { Course } from "../entity/courses";
import { InscriptionCourse } from "../entity/inscription-course";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "mysecretpassword",
    database: "mydatabase",
    synchronize: false,
    logging: false,
    entities: [Member, Contact, Course, InscriptionCourse],
    migrations: [],
    subscribers: [],
});