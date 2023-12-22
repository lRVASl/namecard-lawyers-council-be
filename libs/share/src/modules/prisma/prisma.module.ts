import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { NameCardRepository } from 'src/repositories';

const services = [PrismaService, NameCardRepository];
@Module({
  providers: [...services],
  exports: [...services],
})
export class PrismaModule {}
