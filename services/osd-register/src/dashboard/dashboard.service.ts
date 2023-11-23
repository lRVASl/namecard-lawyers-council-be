import { Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { MemberWalkinRepository } from '@osd-register/share';
import { Prisma } from '@prisma/client';

@Injectable()
export class DashboardService {
  constructor(private memberWalkinRepo: MemberWalkinRepository) {}

  create(createDashboardDto: CreateDashboardDto) {
    return 'This action adds a new dashboard';
  }

  findAll() {
    return `This action returns all dashboard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dashboard`;
  }

  async MemberWalkInfindByEvent(eventid: number) {
    const conditionCountRegister = {
      where: {
        eventsId: eventid,
        master_data_type: { id_type: { not: 16 } },
      },
    } as Prisma.member_walkinCountArgs;

    const conditionCountWalkin = {
      where: {
        eventsId: eventid,
        master_data_type: { id_type: { in: 16 } },
      },
    } as Prisma.member_walkinCountArgs;
    const conditionCountCheckin = {
      where: {
        eventsId: eventid,
        checkin: true,
      },
    } as Prisma.member_walkinCountArgs;
    return {
      countRegister: await this.memberWalkinRepo.count(conditionCountRegister),
      countWalkin: await this.memberWalkinRepo.count(conditionCountWalkin),
      countCheckin: await this.memberWalkinRepo.count(conditionCountCheckin),
    };
  }

  update(id: number, updateDashboardDto: UpdateDashboardDto) {
    return `This action updates a #${id} dashboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} dashboard`;
  }
}
