import { Injectable } from '@nestjs/common';
import { CreateMasterDataTypeDto } from './dto/create-master-data-type.dto';
import { UpdateMasterDataTypeDto } from './dto/update-master-data-type.dto';
import { MasterDataTypeRepository } from '@osd-register/share';
import { Prisma } from '@prisma/client';

@Injectable()
export class MasterDataTypeService {
  constructor(private masterDataTypeRepo: MasterDataTypeRepository) {}
  create(createMasterDataTypeDto: CreateMasterDataTypeDto) {
    return 'This action adds a new masterDataType';
  }
  upload(upload: CreateMasterDataTypeDto) {
    const condition = {
      data: upload,
    } as Prisma.master_data_typeCreateManyArgs;
    return this.masterDataTypeRepo.createMany(condition);
  }

  findAll() {
    return this.masterDataTypeRepo.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} masterDataType`;
  }

  update(id: number, updateMasterDataTypeDto: UpdateMasterDataTypeDto) {
    return `This action updates a #${id} masterDataType`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterDataType`;
  }
}
