import { PrismaService } from '../modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { TQueryClient } from '../modules/prisma/types';
import { Prisma } from '@prisma/client';

@Injectable()
export class MasterDataOccupationRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(option?: { prisma?: TQueryClient }) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_occupation.findMany();
  }
  async findByCondition(
    condition: Prisma.master_data_occupationFindFirstArgsBase,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_occupation.findMany(condition);
  }
  async create(
    condition: Prisma.master_data_occupationCreateArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_occupation.create(condition);
  }
  async createMany(
    data: Prisma.master_data_occupationCreateManyArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_occupation.createMany(data);
  }
  async update(
    data: Prisma.master_data_occupationUpdateArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_occupation.update(data);
  }
  async delete(
    condition: Prisma.master_data_occupationDeleteArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_occupation.delete(condition);
  }
}
