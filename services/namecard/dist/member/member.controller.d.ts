import { MemberService } from './member.service';
export declare class MemberController {
    private memberService;
    constructor(memberService: MemberService);
    findAll(): Promise<import(".prisma/client").namecard[]>;
}
