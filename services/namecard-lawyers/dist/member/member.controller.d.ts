/// <reference types="multer" />
import { Response } from 'express';
import { MemberService } from './member.service';
import { Prisma } from '@prisma/client';
export declare class MemberController {
    private memberService;
    constructor(memberService: MemberService);
    getimage(image: any, res: Response): Promise<void>;
    create(data: Prisma.namecardCreateArgs): Promise<Prisma.BatchPayload>;
    findByCondition(condition: Prisma.namecardFindFirstArgs): Promise<(import(".prisma/client").namecard & {
        images_namecard: import(".prisma/client").images_namecard[];
    })[]>;
    uploadFilesImages(id: string, images: Express.Multer.File[]): Promise<any>;
    findAll(): Promise<(import(".prisma/client").namecard & {
        images_namecard: import(".prisma/client").images_namecard[];
    })[]>;
    update(condition: Prisma.namecardUpdateArgs): Promise<import(".prisma/client").namecard>;
    remove(id: number, member_number: string): Promise<Prisma.BatchPayload | import(".prisma/client").namecard>;
    removeImage(image: string): Promise<Prisma.BatchPayload>;
}
