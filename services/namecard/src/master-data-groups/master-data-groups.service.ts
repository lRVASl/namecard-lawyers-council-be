import { Injectable } from '@nestjs/common';
import { MasterDataGroupsRepository } from '@osd-register/share';
import { Prisma } from '@prisma/client';

@Injectable()
export class MasterDataGroupsService {
  constructor(private masterDataGroupsRepo: MasterDataGroupsRepository) {}

  async create(data: Prisma.master_data_groupsCreateInput) {
    const condition = { data: data } as Prisma.master_data_groupsCreateArgs;
    return this.masterDataGroupsRepo.create(condition);
  }

  async createMany(condition: Prisma.master_data_groupsCreateManyArgs) {
    return this.masterDataGroupsRepo.createMany(condition);
  }

  async findAll() {
    return this.masterDataGroupsRepo.findAll();
  }

  async findByCondition(condition: Prisma.master_data_groupsFindFirstArgsBase) {
    return this.masterDataGroupsRepo.findByCondition(condition);
  }

  async update(condition: Prisma.master_data_groupsUpdateArgs) {
    return this.masterDataGroupsRepo.update(condition);
  }

  async remove(master_data_groupsid: number) {
    const condition = {
      where: {
        id: Number(master_data_groupsid),
      },
    } as Prisma.master_data_groupsDeleteArgs;
    return this.masterDataGroupsRepo.delete(condition);
  }
}
