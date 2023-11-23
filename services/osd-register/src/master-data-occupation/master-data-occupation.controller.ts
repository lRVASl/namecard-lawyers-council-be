import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MasterDataOccupationService } from './master-data-occupation.service';
import { Prisma } from '@prisma/client';

@Controller('api/master-data-occupation')
export class MasterDataOccupationController {
  constructor(
    private readonly masterDataOccupationService: MasterDataOccupationService,
  ) {}

  @Post()
  create(@Body('data') data: Prisma.master_data_occupationCreateInput) {
    return this.masterDataOccupationService.create(data);
  }

  @Post('createmany')
  createMany(
    @Body('condition') condition: Prisma.master_data_occupationCreateManyArgs,
  ) {
    return this.masterDataOccupationService.createMany(condition);
  }

  @Post('findByCondition')
  findByCondition(
    @Body('condition')
    condition: Prisma.master_data_occupationFindFirstArgsBase,
  ) {
    return this.masterDataOccupationService.findByCondition(condition);
  }

  @Get()
  findAll() {
    return this.masterDataOccupationService.findAll();
  }

  @Patch()
  update(
    @Body('condition') condition: Prisma.master_data_occupationUpdateArgs,
  ) {
    return this.masterDataOccupationService.update(condition);
  }

  @Delete(':master_data_occupationid')
  remove(@Param('master_data_occupationid') master_data_occupationid: number) {
    return this.masterDataOccupationService.remove(master_data_occupationid);
  }
}
