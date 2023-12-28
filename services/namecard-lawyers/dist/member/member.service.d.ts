import { NameCardRepository } from '@namecard-lawyers/share';
import { Prisma } from '@prisma/client';
export declare class MemberService {
    private readonly namecardRepo;
    constructor(namecardRepo: NameCardRepository);
    createMany(condition: Prisma.namecardCreateArgs): Promise<Prisma.BatchPayload>;
    uploadFilesImages(id: string, body: any): Promise<any>;
    findByCondition(conditionscondition: any): Promise<(import(".prisma/client").namecard & {
        images_namecard: import(".prisma/client").images_namecard[];
    })[]>;
    findAll(): Promise<(import(".prisma/client").namecard & {
        images_namecard: import(".prisma/client").images_namecard[];
    })[]>;
    update(condition: Prisma.namecardUpdateArgs): Promise<import(".prisma/client").namecard>;
    remove(id: number, namecardID: string): Promise<Prisma.BatchPayload | import(".prisma/client").namecard>;
    removeImage(images_ghs: string): Promise<Prisma.BatchPayload>;
}
