import { Injectable } from '@nestjs/common';
import { NameCardRepository } from '@namecard-lawyers/share';
import { Prisma } from '@prisma/client';

@Injectable()
export class MemberService {
  constructor(private readonly namecardRepo: NameCardRepository) {}

  async createMany(condition: Prisma.namecardCreateArgs) {
    return this.namecardRepo.createMany(condition);
  }

  async findByCondition(conditionscondition:any) {
    const conditions = {
      where: {
        id: Number(conditionscondition.id),
      },
    } as Prisma.namecardFindFirstArgs;
    return this.namecardRepo.findByCondition(conditions);
  }
  async findAll() {
    return this.namecardRepo.findAll();
  }
}
