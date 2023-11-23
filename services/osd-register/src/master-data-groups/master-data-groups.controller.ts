import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MasterDataGroupsService } from './master-data-groups.service';
import { Prisma } from '@prisma/client';

@Controller('api/master-data-groups')
export class MasterDataGroupsController {
  constructor(
    private readonly masterDataGroupsService: MasterDataGroupsService,
  ) {}

  @Post()
  create(@Body('data') data: Prisma.master_data_groupsCreateInput) {
    return this.masterDataGroupsService.create(data);
  }

  @Post('createmany')
  createMany(
    @Body('condition') condition: Prisma.master_data_groupsCreateManyArgs,
  ) {
    return this.masterDataGroupsService.createMany(condition);
  }

  @Post('findByCondition')
  findByCondition(
    @Body('condition')
    condition: Prisma.master_data_groupsFindFirstArgsBase,
  ) {
    return this.masterDataGroupsService.findByCondition(condition);
  }

  @Get()
  findAll() {
    return this.masterDataGroupsService.findAll();
  }

  @Patch()
  update(@Body('condition') condition: Prisma.master_data_groupsUpdateArgs) {
    return this.masterDataGroupsService.update(condition);
  }

  @Delete(':master_data_groupsid')
  remove(@Param('master_data_groupsid') master_data_groupsid: number) {
    return this.masterDataGroupsService.remove(master_data_groupsid);
  }
}
