import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { Prisma } from '@prisma/client';

@Controller('api/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body('data') data: Prisma.eventsCreateInput) {
    return this.eventsService.create(data);
  }

  @Post('createmany')
  createMany(@Body('condition') condition: Prisma.eventsCreateManyArgs) {
    return this.eventsService.createMany(condition);
  }

  @Post('findByCondition')
  findByCondition(
    @Body('condition')
    condition: Prisma.eventsFindFirstArgsBase,
  ) {
    return this.eventsService.findByCondition(condition);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Patch()
  update(@Body('condition') condition: Prisma.eventsUpdateArgs) {
    return this.eventsService.update(condition);
  }

  @Delete(':eventsid')
  remove(@Param('eventsid') eventsid: number) {
    return this.eventsService.remove(eventsid);
  }
}
