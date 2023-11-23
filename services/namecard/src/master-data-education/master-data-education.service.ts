import { Injectable } from '@nestjs/common';
import { MasterDataEducationRepository } from '@osd-register/share';
import { Prisma } from '@prisma/client';

@Injectable()
export class MasterDataEducationService {
  constructor(private masterDataEducationRepo: MasterDataEducationRepository) {}

  async create(data: Prisma.master_data_educationCreateInput) {
    const condition = { data: data } as Prisma.master_data_educationCreateArgs;
    return this.masterDataEducationRepo.create(condition);
  }

  async createMany(condition: Prisma.master_data_educationCreateManyArgs) {
    return this.masterDataEducationRepo.createMany(condition);
  }

  async findAll() {
    return this.masterDataEducationRepo.findAll();
  }

  async findByCondition(
    condition: Prisma.master_data_educationFindFirstArgsBase,
  ) {
    return this.masterDataEducationRepo.findByCondition(condition);
  }

  async update(condition: Prisma.master_data_educationUpdateArgs) {
    return this.masterDataEducationRepo.update(condition);
  }

  async remove(master_data_educationid: number) {
    const condition = {
      where: {
        id: Number(master_data_educationid),
      },
    } as Prisma.master_data_educationDeleteArgs;
    return this.masterDataEducationRepo.delete(condition);
  }
}
