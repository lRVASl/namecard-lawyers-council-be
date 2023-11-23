import { Module } from '@nestjs/common';
import { MasterDataTypeService } from './master-data-type.service';
import { MasterDataTypeController } from './master-data-type.controller';
import { PrismaModule } from '@osd-register/share';

@Module({
  controllers: [MasterDataTypeController],
  providers: [MasterDataTypeService],
  imports: [PrismaModule],
})
export class MasterDataTypeModule {}
