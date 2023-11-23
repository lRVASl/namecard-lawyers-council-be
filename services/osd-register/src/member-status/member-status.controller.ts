import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MemberStatusService } from './member-status.service';
import { Prisma } from '@prisma/client';

@Controller('api/member-status')
export class MemberStatusController {
  constructor(private readonly memberStatusService: MemberStatusService) {}

  @Post()
  create(@Body('data') data: Prisma.member_statusCreateInput) {
    return this.memberStatusService.create(data);
  }

  @Post('createmany')
  createMany(@Body('condition') condition: Prisma.member_statusCreateManyArgs) {
    return this.memberStatusService.createMany(condition);
  }

  @Post('findByCondition')
  findByCondition(
    @Body('condition')
    condition: Prisma.member_statusFindFirstArgsBase,
  ) {
    return this.memberStatusService.findByCondition(condition);
  }

  @Get()
  findAll() {
    return this.memberStatusService.findAll();
  }

  @Patch()
  update(@Body('condition') condition: Prisma.member_statusUpdateArgs) {
    return this.memberStatusService.update(condition);
  }

  @Delete(':member_statusid')
  remove(@Param('member_statusid') member_statusid: number) {
    return this.memberStatusService.remove(member_statusid);
  }
}
