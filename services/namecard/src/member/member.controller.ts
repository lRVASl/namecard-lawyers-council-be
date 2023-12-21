import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Res,
  Query,
} from '@nestjs/common';
import { Response } from 'express';
import { diskStorage } from 'multer';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { MemberService } from './member.service';
import { Prisma } from '@prisma/client';
import config from '../configs';

import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

// @UseFilters(AppErrorExceptionFilter)
@Controller('api/namecard-lawyers')
export class MemberController {
  constructor(private memberService: MemberService) {}

  @Get('/get_image/namecard')
  @UseInterceptors(FileInterceptor('image'))
  async getimage(@Query('image') image: any, @Res() res: Response) {
    try {
      const imagePath = join(
        __dirname,
        '../../',
        `${process.env.PATH_MOUNTDIR_IMAGES}`,
        `${image}`,
      );
      res.sendFile(`${imagePath}`);
    } catch (error) {
      res
        .status(404)
        .sendFile('path/to/default/image.jpg', { root: './public' });
    }
  }

  @Post('/create')
  create(@Body() data: Prisma.namecardCreateArgs) {
    return this.memberService.createMany(data);
  }

  @Post('/findbyid')
  findByCondition(
    @Body()
    condition: Prisma.namecardFindFirstArgs,
  ) {
    return this.memberService.findByCondition(condition);
  }

  @Post('/images/:id')
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      storage: diskStorage({
        destination: `${process.env.PATH_MOUNTDIR_IMAGES}`,
        filename: (req, file, callback) => {
          const filename = `${uuidv4()}-${file.originalname}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async uploadFilesImages(
    @Param('id') id: string,
    @UploadedFiles() images: Express.Multer.File[],
  ) {
    return this.memberService.uploadFilesImages(id, images);
  }

  @Get()
  findAll() {
    return this.memberService.findAll();
  }

  @Patch('/updateuser')
  update(@Body('condition') condition: Prisma.namecardUpdateArgs) {
    return this.memberService.update(condition);
  }

  @Delete()
  remove(@Body('id') id: number, @Body('member_number') member_number: string) {
    console.log(id);
    console.log(member_number);

    return this.memberService.remove(id, member_number);
  }
  @Delete('/delete-image')
  removeImage(@Body('image') image: string) {
    return this.memberService.removeImage(image);
  }
}
