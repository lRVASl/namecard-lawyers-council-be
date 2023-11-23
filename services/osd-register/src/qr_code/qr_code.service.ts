import { Injectable } from '@nestjs/common';
import { QrCodeRepository } from '@osd-register/share';
import { Prisma } from '@prisma/client';

@Injectable()
export class QrCodeService {
  constructor(private qrCodeRepo: QrCodeRepository) {}

  async create(data: Prisma.qr_codeCreateInput) {
    const condition = { data: data } as Prisma.qr_codeCreateArgs;
    return this.qrCodeRepo.create(condition);
  }

  async createMany(condition: Prisma.qr_codeCreateManyArgs) {
    return this.qrCodeRepo.createMany(condition);
  }

  async findAll() {
    return this.qrCodeRepo.findAll();
  }

  async findByCondition(condition: Prisma.qr_codeFindFirstArgsBase) {
    return this.qrCodeRepo.findByCondition(condition);
  }

  async findFirst(condition: Prisma.qr_codeFindFirstArgsBase) {
    return this.qrCodeRepo.findFirst(condition);
  }

  async update(condition: Prisma.qr_codeUpdateArgs) {
    return this.qrCodeRepo.update(condition);
  }

  async remove(qr_codeid: number) {
    const condition = {
      where: {
        id: Number(qr_codeid),
      },
    } as Prisma.qr_codeDeleteArgs;
    return this.qrCodeRepo.delete(condition);
  }
}
