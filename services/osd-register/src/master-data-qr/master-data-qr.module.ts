import { Module } from '@nestjs/common';
import { MasterDataQrService } from './master-data-qr.service';
import { MasterDataQrController } from './master-data-qr.controller';
import { PrismaModule } from '@osd-register/share';

@Module({
  imports: [PrismaModule],
  controllers: [MasterDataQrController],
  providers: [MasterDataQrService],
})
export class MasterDataQrModule {}
