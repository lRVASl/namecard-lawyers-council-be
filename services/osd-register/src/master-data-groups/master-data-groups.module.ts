import { Module } from '@nestjs/common';
import { MasterDataGroupsService } from './master-data-groups.service';
import { MasterDataGroupsController } from './master-data-groups.controller';
import { PrismaModule } from '@osd-register/share';

@Module({
  imports: [PrismaModule],
  controllers: [MasterDataGroupsController],
  providers: [MasterDataGroupsService],
})
export class MasterDataGroupsModule {}
