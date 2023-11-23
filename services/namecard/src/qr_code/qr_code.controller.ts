import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { QrCodeService } from './qr_code.service';
import { Prisma } from '@prisma/client';

@Controller('api/qr-code')
export class QrCodeController {
  constructor(private readonly qrCodeService: QrCodeService) {}

  @Post()
  create(@Body('data') data: Prisma.qr_codeCreateInput) {
    return this.qrCodeService.create(data);
  }

  @Post('createmany')
  createMany(@Body('condition') condition: Prisma.qr_codeCreateManyArgs) {
    return this.qrCodeService.createMany(condition);
  }

  @Post('findByCondition')
  findByCondition(
    @Body('condition')
    condition: Prisma.qr_codeFindFirstArgsBase,
  ) {
    return this.qrCodeService.findByCondition(condition);
  }

  @Get()
  findAll() {
    return this.qrCodeService.findAll();
  }

  @Get(':qrcodeId')
  async findById(@Res() res: Response, @Param('qrcodeId') qrcodeId: string) {
    const condition = {
      where: {
        qr_uuid: qrcodeId,
      },
    } as Prisma.qr_codeFindFirstArgsBase;
    const base64Data = await this.qrCodeService.findFirst(condition);

    const base64Image = base64Data.qr_image.replace(
      /^data:image\/(png|jpeg|jpg);base64,/,
      '',
    );
    const imageBuffer = Buffer.from(base64Image, 'base64');
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'image/png');
    return res.send(imageBuffer);
  }

  @Patch()
  update(@Body('condition') condition: Prisma.qr_codeUpdateArgs) {
    return this.qrCodeService.update(condition);
  }

  @Delete(':qr_codeid')
  remove(@Param('qr_codeid') qr_codeid: number) {
    return this.qrCodeService.remove(qr_codeid);
  }
}
