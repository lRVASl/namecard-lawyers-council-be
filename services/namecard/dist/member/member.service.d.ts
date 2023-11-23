import { NameCardRepository } from '@namecard-lawyers/share';
export declare class MemberService {
    private readonly namecardRepo;
    constructor(namecardRepo: NameCardRepository);
    findAll(): Promise<import(".prisma/client").namecard[]>;
}
