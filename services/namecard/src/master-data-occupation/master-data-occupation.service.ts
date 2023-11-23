import { Injectable } from '@nestjs/common';
import { MasterDataOccupationRepository } from '@osd-register/share';
import { Prisma } from '@prisma/client';

@Injectable()
export class MasterDataOccupationService {
  constructor(
    private masterDataOccupationRepo: MasterDataOccupationRepository,
  ) {}

  async create(data: Prisma.master_data_occupationCreateInput) {
    const condition = { data: data } as Prisma.master_data_occupationCreateArgs;
    return this.masterDataOccupationRepo.create(condition);
  }

  async createMany(condition: Prisma.master_data_occupationCreateManyArgs) {
    return this.masterDataOccupationRepo.createMany(condition);
  }

  async findAll() {
    return this.masterDataOccupationRepo.findAll();
  }

  async findByCondition(
    condition: Prisma.master_data_occupationFindFirstArgsBase,
  ) {
    return this.masterDataOccupationRepo.findByCondition(condition);
  }

  async update(condition: Prisma.master_data_occupationUpdateArgs) {
    return this.masterDataOccupationRepo.update(condition);
  }

  async remove(master_data_occupationid: number) {
    const condition = {
      where: {
        id: Number(master_data_occupationid),
      },
    } as Prisma.master_data_occupationDeleteArgs;
    return this.masterDataOccupationRepo.delete(condition);
  }
}
