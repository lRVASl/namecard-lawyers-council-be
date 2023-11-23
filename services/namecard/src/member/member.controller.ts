import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
// import { AppErrorExceptionFilter } from '@namecard-lawyers/share';
import { MemberService } from './member.service';
import { Prisma } from '@prisma/client';
import config from '../configs';
import { v4 as uuidv4 } from 'uuid';

// @UseFilters(AppErrorExceptionFilter)
@Controller('api/namecard-lawyers')
export class MemberController {
  constructor(private memberService: MemberService) {}

  @Post('/create')
  create(@Body() data: Prisma.namecardCreateArgs) {
    return this.memberService.createMany(data);
  }

  @Post('/findbyid')
  findByCondition(
    @Body()
    condition: Prisma.namecardFindFirstArgs,
  ) {
    return this.memberService.findByCondition(condition);
  }

  @Get()
  findAll() {
    return this.memberService.findAll();
  }
}
