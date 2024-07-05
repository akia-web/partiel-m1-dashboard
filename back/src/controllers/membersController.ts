import { AppDataSource } from "../config/config-db";
import { Member } from "../entity/members";

export async function getAllMembers(req: any, res: any){
    const memberRepository = AppDataSource.getRepository(Member);
    const members = await memberRepository.find({
        relations: ["contact"]
    });
    return res.json(members);
}
