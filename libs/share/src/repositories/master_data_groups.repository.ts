import { PrismaService } from '../modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { TQueryClient } from '../modules/prisma/types';
import { Prisma } from '@prisma/client';

@Injectable()
export class MasterDataGroupsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(option?: { prisma?: TQueryClient }) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_groups.findMany();
  }
  async findFirst(
    condition: Prisma.master_data_groupsFindFirstArgsBase,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_groups.findFirst(condition);
  }
  async findByCondition(
    condition: Prisma.master_data_groupsFindFirstArgsBase,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_groups.findMany(condition);
  }
  async create(
    condition: Prisma.master_data_groupsCreateArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_groups.create(condition);
  }
  async createMany(
    data: Prisma.master_data_groupsCreateManyArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_groups.createMany(data);
  }
  async update(
    data: Prisma.master_data_groupsUpdateArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_groups.update(data);
  }
  async delete(
    condition: Prisma.master_data_groupsDeleteArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.master_data_groups.delete(condition);
  }
}
