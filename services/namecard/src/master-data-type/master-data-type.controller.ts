import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MasterDataTypeService } from './master-data-type.service';
import { CreateMasterDataTypeDto } from './dto/create-master-data-type.dto';
import { UpdateMasterDataTypeDto } from './dto/update-master-data-type.dto';

@Controller('api/master-data-type')
export class MasterDataTypeController {
  constructor(private readonly masterDataTypeService: MasterDataTypeService) {}

  @Post()
  create(@Body() createMasterDataTypeDto: CreateMasterDataTypeDto) {
    return this.masterDataTypeService.create(createMasterDataTypeDto);
  }

  @Post('upload')
  upload(@Body('data') createMasterDataTypeDto: CreateMasterDataTypeDto) {
    return this.masterDataTypeService.upload(createMasterDataTypeDto);
  }

  @Get()
  findAll() {
    return this.masterDataTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterDataTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMasterDataTypeDto: UpdateMasterDataTypeDto,
  ) {
    return this.masterDataTypeService.update(+id, updateMasterDataTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterDataTypeService.remove(+id);
  }
}
