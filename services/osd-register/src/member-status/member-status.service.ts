import { Injectable } from '@nestjs/common';
import { MemberStatusRepository } from '@osd-register/share';
import { Prisma } from '@prisma/client';

@Injectable()
export class MemberStatusService {
  constructor(private readonly memberStatusRepo: MemberStatusRepository) {}

  async create(data: Prisma.member_statusCreateInput) {
    const condition = { data: data } as Prisma.member_statusCreateArgs;
    return this.memberStatusRepo.create(condition);
  }

  async createMany(condition: Prisma.member_statusCreateManyArgs) {
    return this.memberStatusRepo.createMany(condition);
  }

  async findAll() {
    return this.memberStatusRepo.findAll();
  }

  async findByCondition(condition: Prisma.member_statusFindFirstArgsBase) {
    return this.memberStatusRepo.findByCondition(condition);
  }

  async update(condition: Prisma.member_statusUpdateArgs) {
    return this.memberStatusRepo.update(condition);
  }

  async remove(memberid: number) {
    const condition = {
      where: {
        id: Number(memberid),
      },
    } as Prisma.member_statusDeleteArgs;
    return this.memberStatusRepo.delete(condition);
  }
}
