import { AppDataSource } from "../config/config-db";
import { Course } from "../entity/courses";

export const getAllCourses = async(req: any, res: any) =>{

    const courseRepository = AppDataSource.getRepository(Course);
    const query = req.query.search; // Remplacez par la valeur que vous recherchez
    
    const queryBuilder = courseRepository
      .createQueryBuilder("course")
      .leftJoinAndSelect("course.inscriptionCours", "inscriptionCours")
      .leftJoinAndSelect("inscriptionCours.member", "member")

    if (query) {
        queryBuilder.where(
            "LOWER(member.first_name) LIKE LOWER(:query)  OR LOWER(member.last_name) LIKE LOWER(:query) OR LOWER(course.professor) LIKE LOWER(:query)",
            { query: `%${query}%` }
        );
    }

    const courses = await queryBuilder.getMany();
    return res.json(courses);
}