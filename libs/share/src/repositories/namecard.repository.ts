import { PrismaService } from '../modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { TQueryClient } from '../modules/prisma/types';
import { Prisma } from '@prisma/client';

@Injectable()
export class NameCardRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(option?: { prisma?: TQueryClient }) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.namecard.findMany({
      include: {
        images_namecard: true,
      },
    });
  }
  async findByCondition(
    condition: Prisma.namecardArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.namecard.findMany({
      ...condition,
      include: {
        images_namecard: true,
      },
    });
  }

  async findFirst(
    condition: Prisma.namecardFindFirstArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.namecard.findFirst({
      include: {
        images_namecard: true,
      },
    });
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
    return prisma.namecard.createMany(data);
  }

  async createImagesAppointment(
    data: Prisma.images_namecardCreateInput,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return await prisma.images_namecard.create({
      data,
    });
  }

  async getFilesImage(id: string, option?: { prisma?: TQueryClient }) {
    const prisma = option?.prisma ?? this.prisma;
    return await prisma.images_namecard.findMany({
      where: { images_namecard: id },
      orderBy: {
        id: 'desc',
      },
    });
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

  async deleteMany(
    condition: Prisma.images_namecardDeleteManyArgs,
    option?: { prisma?: TQueryClient },
  ) {
    const prisma = option?.prisma ?? this.prisma;
    return prisma.images_namecard.deleteMany(condition);
  }
}
