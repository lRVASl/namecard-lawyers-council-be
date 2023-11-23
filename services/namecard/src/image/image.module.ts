import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { PrismaModule } from '@namecard-lawyers/share';

@Module({
  imports: [PrismaModule],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
