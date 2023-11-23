import { PrismaService } from '../modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { TQueryClient } from '../modules/prisma/types';
import { Prisma } from '@prisma/client';

@Injectable()
export class NameCardRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(option?: { prisma?: TQueryClient }) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.namecard.findMany();
  }
  async findByCondition(
    condition: Prisma.namecardArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.namecard.findMany(condition);
  }

  async findFirst(
    condition: Prisma.namecardFindFirstArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.namecard.findFirst(condition);
  }

  async create(
    condition: Prisma.namecardCreateArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.namecard.create(condition);
  }
  async createMany(
    data: Prisma.namecardCreateManyArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    console.log(`data =>`, data);

    return prisma.namecard.createMany( data );
  }
  async update(
    data: Prisma.namecardUpdateArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.namecard.update(data);
  }
  async delete(
    condition: Prisma.namecardDeleteArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.namecard.delete(condition);
  }
}
