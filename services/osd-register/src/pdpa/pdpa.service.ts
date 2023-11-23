import { Injectable } from '@nestjs/common';
import { PdpaRepository } from '@osd-register/share';
import { Prisma } from '@prisma/client';

@Injectable()
export class PdpaService {
  constructor(private pdpaRepo: PdpaRepository) {}

  async create(data: Prisma.pdpaCreateInput) {
    const condition = { data: data } as Prisma.pdpaCreateArgs;
    return this.pdpaRepo.create(condition);
  }

  async createMany(condition: Prisma.pdpaCreateManyArgs) {
    return this.pdpaRepo.createMany(condition);
  }

  async findAll() {
    return this.pdpaRepo.findAll();
  }

  async findByCondition(condition: Prisma.pdpaFindFirstArgsBase) {
    return this.pdpaRepo.findByCondition(condition);
  }

  async update(condition: Prisma.pdpaUpdateArgs) {
    return this.pdpaRepo.update(condition);
  }

  async remove(pdpaid: number) {
    const condition = {
      where: {
        id: Number(pdpaid),
      },
    } as Prisma.pdpaDeleteArgs;
    return this.pdpaRepo.delete(condition);
  }
}
