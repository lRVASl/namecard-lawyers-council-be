import { Module } from '@nestjs/common';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import { PrismaModule } from '@namecard-lawyers/share';

@Module({
  imports: [PrismaModule],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
