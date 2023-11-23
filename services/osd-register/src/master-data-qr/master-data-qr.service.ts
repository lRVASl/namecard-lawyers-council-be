import { Injectable } from '@nestjs/common';
import { MasterDataQrRepository } from '@osd-register/share';
import { Prisma } from '@prisma/client';

@Injectable()
export class MasterDataQrService {
  constructor(private masterDataQrRepo: MasterDataQrRepository) {}

  async create(data: Prisma.master_data_qrCreateInput) {
    const condition = { data: data } as Prisma.master_data_qrCreateArgs;
    return this.masterDataQrRepo.create(condition);
  }

  async createMany(condition: Prisma.master_data_qrCreateManyArgs) {
    return this.masterDataQrRepo.createMany(condition);
  }

  async findAll() {
    return this.masterDataQrRepo.findAll();
  }

  async findByCondition(condition: Prisma.master_data_qrFindFirstArgsBase) {
    return this.masterDataQrRepo.findByCondition(condition);
  }

  async update(condition: Prisma.master_data_qrUpdateArgs) {
    return this.masterDataQrRepo.update(condition);
  }

  async remove(master_data_qrid: number) {
    const condition = {
      where: {
        id: Number(master_data_qrid),
      },
    } as Prisma.master_data_qrDeleteArgs;
    return this.masterDataQrRepo.delete(condition);
  }
}
