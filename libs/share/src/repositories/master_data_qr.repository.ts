import { PrismaService } from '../modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { TQueryClient } from '../modules/prisma/types';
import { Prisma } from '@prisma/client';

@Injectable()
export class MasterDataQrRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(option?: { prisma?: TQueryClient }) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_qr.findMany();
  }
  async findByCondition(
    condition: Prisma.master_data_qrFindFirstArgsBase,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_qr.findMany(condition);
  }
  async create(
    condition: Prisma.master_data_qrCreateArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_qr.create(condition);
  }
  async createMany(
    data: Prisma.master_data_qrCreateManyArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_qr.createMany(data);
  }
  async update(
    data: Prisma.master_data_qrUpdateArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_qr.update(data);
  }
  async delete(
    condition: Prisma.master_data_qrDeleteArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_qr.delete(condition);
  }
}
