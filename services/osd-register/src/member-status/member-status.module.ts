import { Module } from '@nestjs/common';
import { MemberStatusService } from './member-status.service';
import { MemberStatusController } from './member-status.controller';
import { PrismaModule } from '@osd-register/share';

@Module({
  imports: [PrismaModule],
  controllers: [MemberStatusController],
  providers: [MemberStatusService],
})
export class MemberStatusModule {}
