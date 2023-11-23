import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PdpaService } from './pdpa.service';
import { Prisma } from '@prisma/client';

@Controller('api/pdpa')
export class PdpaController {
  constructor(private readonly pdpaService: PdpaService) {}

  @Post()
  create(@Body('data') data: Prisma.pdpaCreateInput) {
    return this.pdpaService.create(data);
  }

  @Post('createmany')
  createMany(@Body('condition') condition: Prisma.pdpaCreateManyArgs) {
    return this.pdpaService.createMany(condition);
  }

  @Post('findByCondition')
  findByCondition(
    @Body('condition')
    condition: Prisma.pdpaFindFirstArgsBase,
  ) {
    return this.pdpaService.findByCondition(condition);
  }

  @Get()
  findAll() {
    return this.pdpaService.findAll();
  }

  @Patch()
  update(@Body('condition') condition: Prisma.pdpaUpdateArgs) {
    return this.pdpaService.update(condition);
  }

  @Delete(':pdpaid')
  remove(@Param('pdpaid') pdpaid: number) {
    return this.pdpaService.remove(pdpaid);
  }
}
