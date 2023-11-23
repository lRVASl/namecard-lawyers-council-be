import { Injectable } from '@nestjs/common';
import { CreateMemberWalkinDto } from './dto/create-member_walkin.dto';
import { UpdateMemberWalkinDto } from './dto/update-member_walkin.dto';
import { MemberWalkinRepository } from '@osd-register/share';
import { Prisma } from '@prisma/client';

@Injectable()
export class MemberWalkinService {
  constructor(private memberWalkinRepo: MemberWalkinRepository) {}

  async create(createMemberWalkinDto: CreateMemberWalkinDto) {
    const findFrist = await this.memberWalkinRepo.findLastId({
      where: {
        master_data_typeId: 16,
      },
      orderBy: {
        number: 'desc',
      },
    });

    const condition = {
      data: {
        prefix: createMemberWalkinDto.prefix,
        name: createMemberWalkinDto.name,
        lastname: createMemberWalkinDto.lastname,
        events: {
          connect: {
            id: +createMemberWalkinDto.eventsId,
          },
        },
        master_data_type: {
          connect: {
            id_type: 16,
          },
        },
        position: createMemberWalkinDto.position,
        checkin: true,
        number: findFrist === null ? 1 : findFrist.number + 1,
      },
    } as Prisma.member_walkinCreateArgs;
    return this.memberWalkinRepo.create(condition);
  }

  upload(upload: CreateMemberWalkinDto) {
    const condition = { data: upload } as Prisma.member_walkinCreateManyArgs;
    return this.memberWalkinRepo.createMany(condition);
  }

  findAll() {
    return `This action returns all memberWalkin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memberWalkin`;
  }

  findByEvent(id: number) {
    const condition = {
      where: {
        eventsId: id,
      },
      include: {
        master_data_type: true,
      },
    } as Prisma.member_walkinFindManyArgs;
    return this.memberWalkinRepo.findByCondition(condition);
  }

  update(id: number, updateMemberWalkinDto: UpdateMemberWalkinDto) {
    const condition = {
      where: {
        id: id,
      },
      data: {
        checkin: updateMemberWalkinDto.checkin,
      },
    } as Prisma.member_walkinUpdateArgs;
    return this.memberWalkinRepo.update(condition);
  }

  remove(id: number) {
    return `This action removes a #${id} memberWalkin`;
  }
}
