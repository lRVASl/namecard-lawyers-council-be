import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EvoteController } from './app.controller';
import { EvoteService } from './app.service';
import { EventsModule } from './events/events.module';
import { MemberStatusModule } from './member-status/member-status.module';
import { QrCodeModule } from './qr_code/qr_code.module';
import { MemberModule } from './member/member.module';
import { PdpaModule } from './pdpa/pdpa.module';
import { MasterDataQrModule } from './master-data-qr/master-data-qr.module';
import { MasterDataOccupationModule } from './master-data-occupation/master-data-occupation.module';
import { MasterDataGroupsModule } from './master-data-groups/master-data-groups.module';
import { MasterDataEducationModule } from './master-data-education/master-data-education.module';
import { ImageModule } from './image/image.module';
import { MasterDataTypeModule } from './master-data-type/master-data-type.module';
import { MemberWalkinModule } from './member_walkin/member_walkin.module';
import { DashboardModule } from './dashboard/dashboard.module';
import configs from './configs';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configs] }),
    EventsModule,
    MasterDataEducationModule,
    MasterDataGroupsModule,
    MasterDataOccupationModule,
    MasterDataQrModule,
    PdpaModule,
    MemberModule,
    QrCodeModule,
    MemberStatusModule,
    ImageModule,
    MasterDataTypeModule,
    MemberWalkinModule,
    DashboardModule,
  ],
  controllers: [EvoteController],
  providers: [EvoteService],
})
export class EvoteMainModule {}
