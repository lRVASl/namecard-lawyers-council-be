import { PrismaService } from '../modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { TQueryClient } from '../modules/prisma/types';
import { Prisma } from '@prisma/client';

@Injectable()
export class MemberWalkinRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(option?: { prisma?: TQueryClient }) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.member_walkin.findMany();
  }
  async findByCondition(
    condition: Prisma.member_walkinFindManyArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.member_walkin.findMany(condition);
  }
  async create(
    condition: Prisma.member_walkinCreateArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.member_walkin.create(condition);
  }
  async createMany(
    data: Prisma.member_walkinCreateManyArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.member_walkin.createMany(data);
  }
  async update(
    data: Prisma.member_walkinUpdateArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.member_walkin.update(data);
  }
  async delete(
    condition: Prisma.member_walkinDeleteArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.member_walkin.delete(condition);
  }
  async count(
    condition: Prisma.member_walkinCountArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.member_walkin.count(condition);
  }
  async findLastId(
    condition: Prisma.member_walkinFindFirstArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.member_walkin.findFirst(condition);
  }
}
