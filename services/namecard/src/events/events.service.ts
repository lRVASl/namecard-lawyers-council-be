import { Injectable } from '@nestjs/common';
import { EventsRepository } from '@osd-register/share';
import { Prisma } from '@prisma/client';

@Injectable()
export class EventsService {
  constructor(private eventsRepo: EventsRepository) {}

  async create(data: Prisma.eventsCreateInput) {
    const condition = { data: data } as Prisma.eventsCreateArgs;
    return this.eventsRepo.create(condition);
  }

  async createMany(condition: Prisma.eventsCreateManyArgs) {
    return this.eventsRepo.createMany(condition);
  }

  async findAll() {
    return this.eventsRepo.findAll();
  }

  async findByCondition(condition: Prisma.eventsFindFirstArgsBase) {
    return this.eventsRepo.findByCondition(condition);
  }

  async update(condition: Prisma.eventsUpdateArgs) {
    return this.eventsRepo.update(condition);
  }

  async remove(eventsid: number) {
    const condition = {
      where: {
        id: Number(eventsid),
      },
    } as Prisma.eventsDeleteArgs;
    return this.eventsRepo.delete(condition);
  }
}
