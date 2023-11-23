import { PrismaService } from '../modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { TQueryClient } from '../modules/prisma/types';
import { Prisma } from '@prisma/client';

@Injectable()
export class MasterDataTypeRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(option?: { prisma?: TQueryClient }) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_type.findMany({ orderBy: { id_type: 'asc' } });
  }
  async findByCondition(
    condition: Prisma.master_data_typeFindFirstArgsBase,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_type.findMany(condition);
  }
  async create(
    condition: Prisma.master_data_typeCreateArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_type.create(condition);
  }
  async createMany(
    data: Prisma.master_data_typeCreateManyArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_type.createMany(data);
  }
  async update(
    data: Prisma.master_data_typeUpdateArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_type.update(data);
  }
  async delete(
    condition: Prisma.master_data_typeDeleteArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_type.delete(condition);
  }
}
