import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MasterDataQrService } from './master-data-qr.service';
import { Prisma } from '@prisma/client';

@Controller('api/master-data-qr')
export class MasterDataQrController {
  constructor(private readonly masterDataQrService: MasterDataQrService) {}

  @Post()
  create(@Body('data') data: Prisma.master_data_qrCreateInput) {
    return this.masterDataQrService.create(data);
  }

  @Post('createmany')
  createMany(
    @Body('condition') condition: Prisma.master_data_qrCreateManyArgs,
  ) {
    return this.masterDataQrService.createMany(condition);
  }

  @Post('findByCondition')
  findByCondition(
    @Body('condition')
    condition: Prisma.master_data_qrFindFirstArgsBase,
  ) {
    return this.masterDataQrService.findByCondition(condition);
  }

  @Get()
  findAll() {
    return this.masterDataQrService.findAll();
  }

  @Patch()
  update(@Body('condition') condition: Prisma.master_data_qrUpdateArgs) {
    return this.masterDataQrService.update(condition);
  }

  @Delete(':master_data_qrid')
  remove(@Param('master_data_qrid') master_data_qrid: number) {
    return this.masterDataQrService.remove(master_data_qrid);
  }
}
