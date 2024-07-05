import { AppDataSource } from "../config/config-db";
import { Course } from "../entity/courses";

export const getAllCourses = async(req: any, res: any) =>{
    const courseRepository = AppDataSource.getRepository(Course);
    const course = await courseRepository.find({
        relations: ["inscriptionCours", "inscriptionCours.member"]
    });
    return res.json(course);
}