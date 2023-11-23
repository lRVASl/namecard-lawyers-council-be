import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  EventsRepository,
  MasterDataGroupsRepository,
  MasterDataEducationRepository,
  MasterDataQrRepository,
  PdpaRepository,
  MemberRepository,
  QrCodeRepository,
  MemberStatusRepository,
  MasterDataOccupationRepository,
  MasterDataTypeRepository,
  MemberWalkinRepository,
  NameCardRepository
} from 'src/repositories';

const services = [
  EventsRepository,
  PrismaService,
  MasterDataGroupsRepository,
  MasterDataEducationRepository,
  MasterDataQrRepository,
  PdpaRepository,
  MemberRepository,
  QrCodeRepository,
  MemberStatusRepository,
  MasterDataOccupationRepository,
  MasterDataTypeRepository,
  MemberWalkinRepository,
  NameCardRepository
];
@Module({
  providers: [...services],
  exports: [...services],
})
export class PrismaModule {}
