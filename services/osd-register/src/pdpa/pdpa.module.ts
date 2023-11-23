import { Module } from '@nestjs/common';
import { PdpaService } from './pdpa.service';
import { PdpaController } from './pdpa.controller';
import { PrismaModule } from '@osd-register/share';

@Module({
  imports: [PrismaModule],
  controllers: [PdpaController],
  providers: [PdpaService],
})
export class PdpaModule {}
