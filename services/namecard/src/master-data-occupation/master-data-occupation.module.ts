import { Module } from '@nestjs/common';
import { MasterDataOccupationService } from './master-data-occupation.service';
import { MasterDataOccupationController } from './master-data-occupation.controller';
import { PrismaModule } from '@osd-register/share';

@Module({
  imports: [PrismaModule],
  controllers: [MasterDataOccupationController],
  providers: [MasterDataOccupationService],
})
export class MasterDataOccupationModule {}
