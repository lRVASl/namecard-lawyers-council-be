import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configs from './configs';
import { NamecardController } from './app.controller';
import { NamecardService } from './app.service';
import { MemberModule } from './member/member.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configs] }),
    MemberModule,
  ],
  controllers: [NamecardController],
  providers: [NamecardService],
})
export class NamecardMainModule {}
