import { Module } from '@nestjs/common';
import { MemberWalkinService } from './member_walkin.service';
import { MemberWalkinController } from './member_walkin.controller';
import { PrismaModule } from '@osd-register/share';

@Module({
  imports: [PrismaModule],
  controllers: [MemberWalkinController],
  providers: [MemberWalkinService],
})
export class MemberWalkinModule {}
