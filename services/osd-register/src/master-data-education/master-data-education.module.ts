import { Module } from '@nestjs/common';
import { MasterDataEducationService } from './master-data-education.service';
import { MasterDataEducationController } from './master-data-education.controller';
import { PrismaModule } from '@osd-register/share';

@Module({
  imports: [PrismaModule],
  controllers: [MasterDataEducationController],
  providers: [MasterDataEducationService],
})
export class MasterDataEducationModule {}
