import { Injectable } from '@nestjs/common';
import {
  EventsRepository,
  MasterDataGroupsRepository,
  MemberRepository,
} from '@osd-register/share';
import { Prisma } from '@prisma/client';
import { generateQRCode } from 'src/utils/qrcode.service';
import config from '../configs';
import { v4 as uuidv4 } from 'uuid';
import { sendEmail } from 'src/utils/mail.service';

@Injectable()
export class MemberService {
  constructor(
    private readonly memberRepo: MemberRepository,
    private readonly eventsRepo: EventsRepository,
    private readonly masterDataGroupsRepo: MasterDataGroupsRepository,
  ) {}

  async create(data: Prisma.memberCreateInput) {
    const { qrcodeUrlMember } = config();
    const conditionCount = {
      orderBy: { member_number: 'desc' },
    } as Prisma.memberFindFirstArgsBase;

    const resultFindLastId = await this.memberRepo.findLastId(conditionCount);

    const number_member =
      resultFindLastId === null ? 0 : resultFindLastId.member_number;
    const uuid = uuidv4();
    const qrCode = await generateQRCode(
      `${qrcodeUrlMember}/${data.events.connect.id}/${
        Number(number_member) + 1
      }/${uuid}`,
    );

    const condition = {
      data: {
        member_number: Number(number_member) + 1,
        qr_code: {
          create: {
            qr_uuid: uuid,
            qr_image: qrCode,
            master_data_qr: {
              connect: {
                id: 2,
              },
            },
          },
        },
        ...data,
      },
    } as Prisma.memberCreateArgs;
    const resultCreate = await this.memberRepo.create(condition);

    const conditionFindGroup = {
      where: { id: data.master_data_groups.connect.id },
    } as Prisma.master_data_groupsFindFirstArgsBase;
    const nameGroup = await this.masterDataGroupsRepo.findFirst(
      conditionFindGroup,
    );
    sendEmail(
      data.email,
      'Confirmation และ QR Code สำหรับงานยุทธศาสตร์ชาติ พตส.13 วันที่ 15 กันยายน 2566',
      uuid,
      data.name_th,
      data.lastname_th,
      nameGroup.name_groups,
    );
    return resultCreate;
  }

  async createById(data: Prisma.memberCreateInput) {
    const { qrcodeUrlMember } = config();
    const conditionCount = {
      orderBy: { member_number: 'desc' },
    } as Prisma.memberFindFirstArgsBase;

    const resultFindLastId = await this.memberRepo.findLastId(conditionCount);

    const number_member =
      resultFindLastId === null ? 0 : resultFindLastId.member_number;
    const uuid = uuidv4();
    const qrCode = await generateQRCode(
      `${qrcodeUrlMember}/${data.events.connect.id}/${
        Number(number_member) + 1
      }/${uuid}`,
    );

    const condition = {
      data: {
        member_number: Number(number_member) + 1,
        qr_code: {
          create: {
            qr_uuid: uuid,
            qr_image: qrCode,
            master_data_qr: {
              connect: {
                id: 2,
              },
            },
          },
        },
        ...data,
      },
    } as Prisma.memberCreateArgs;
    return await this.memberRepo.create(condition);
  }

  async createMany(condition: Prisma.memberCreateManyArgs) {
    return this.memberRepo.createMany(condition);
  }

  async findAll() {
    return this.memberRepo.findAll();
  }

  async findByCondition(condition: Prisma.memberFindFirstArgsBase) {
    return this.memberRepo.findByCondition(condition);
  }

  async update(condition: Prisma.memberUpdateArgs) {
    return this.memberRepo.update(condition);
  }
  async checkin(condition: Prisma.memberUpdateArgs) {
    const conditionEvent = {
      where: { id: condition.data.events.connect.id },
    } as Prisma.eventsFindFirstArgsBase;
    const statusEvent = await this.eventsRepo.findFirst(conditionEvent);
    if (statusEvent.event_start === false) {
      return { status: 201, statusTest: 'not started ' };
    } else {
      return this.memberRepo.update(condition);
    }
  }

  async remove(memberid: number) {
    const condition = {
      where: {
        id: Number(memberid),
      },
    } as Prisma.memberDeleteArgs;
    return this.memberRepo.delete(condition);
  }
}
