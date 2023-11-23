import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MasterDataEducationService } from './master-data-education.service';
import { Prisma } from '@prisma/client';

@Controller('api/master-data-education')
export class MasterDataEducationController {
  constructor(
    private readonly masterDataEducationService: MasterDataEducationService,
  ) {}

  @Post()
  create(@Body('data') data: Prisma.master_data_educationCreateInput) {
    return this.masterDataEducationService.create(data);
  }

  @Post('createmany')
  createMany(
    @Body('condition') condition: Prisma.master_data_educationCreateManyArgs,
  ) {
    return this.masterDataEducationService.createMany(condition);
  }

  @Post('findByCondition')
  findByCondition(
    @Body('condition')
    condition: Prisma.master_data_educationFindFirstArgsBase,
  ) {
    return this.masterDataEducationService.findByCondition(condition);
  }

  @Get()
  findAll() {
    return this.masterDataEducationService.findAll();
  }

  @Patch()
  update(@Body('condition') condition: Prisma.master_data_educationUpdateArgs) {
    return this.masterDataEducationService.update(condition);
  }

  @Delete(':master_data_educationid')
  remove(@Param('master_data_educationid') master_data_educationid: number) {
    return this.masterDataEducationService.remove(master_data_educationid);
  }
}
