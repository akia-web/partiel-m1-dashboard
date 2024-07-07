import { AppDataSource } from "../config/config-db";
import { Member } from "../entity/members";

export async function getAllMembers(req: any, res: any){
    const query = req.query.search
    const memberRepository = AppDataSource.getRepository(Member);

    const queryBuilder = memberRepository.createQueryBuilder("member")
    .leftJoinAndSelect("member.contact", "contact")
    .orderBy("member.last_name", "ASC");

    if (query) {
        queryBuilder.where(
            "LOWER(member.first_name) LIKE LOWER(:query) OR LOWER(member.last_name) LIKE LOWER(:query)",
            { query: `%${query}%` }
        );
    }

    const members = await queryBuilder.getMany();
    return res.json(members);
}
