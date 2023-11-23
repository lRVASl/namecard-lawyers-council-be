import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { Prisma } from '@prisma/client';

@Controller('api/member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  create(@Body('data') data: Prisma.memberCreateInput) {
    return this.memberService.create(data);
  }

  @Post('createmany')
  createMany(@Body('condition') condition: Prisma.memberCreateManyArgs) {
    return this.memberService.createMany(condition);
  }

  @Post('findByCondition')
  findByCondition(
    @Body('condition')
    condition: Prisma.memberFindFirstArgsBase,
  ) {
    return this.memberService.findByCondition(condition);
  }

  @Post(':id')
  createById(@Body('data') data: Prisma.memberCreateInput) {
    return this.memberService.createById(data);
  }

  @Get()
  findAll() {
    return this.memberService.findAll();
  }

  @Patch()
  update(@Body('condition') condition: Prisma.memberUpdateArgs) {
    return this.memberService.update(condition);
  }

  @Patch('checkin')
  checkin(@Body('condition') condition: Prisma.memberUpdateArgs) {
    return this.memberService.checkin(condition);
  }

  @Delete(':memberid')
  remove(@Param('memberid') memberid: number) {
    return this.memberService.remove(memberid);
  }
}
