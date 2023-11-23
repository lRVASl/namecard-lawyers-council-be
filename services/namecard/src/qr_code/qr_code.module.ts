import { Module } from '@nestjs/common';
import { QrCodeService } from './qr_code.service';
import { QrCodeController } from './qr_code.controller';
import { PrismaModule } from '@osd-register/share';

@Module({
  imports: [PrismaModule],
  controllers: [QrCodeController],
  providers: [QrCodeService],
})
export class QrCodeModule {}
