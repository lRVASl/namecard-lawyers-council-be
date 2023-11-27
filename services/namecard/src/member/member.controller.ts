import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { UserInterceptor } from '@namecard-lawyers/share';
import { diskStorage } from 'multer';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { MemberService } from './member.service';
import { Prisma } from '@prisma/client';
import config from '../configs';
import { v4 as uuidv4 } from 'uuid';

// @UseFilters(AppErrorExceptionFilter)
@Controller('api/namecard-lawyers')
export class MemberController {
  constructor(private memberService: MemberService) {}

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

  @Post('/images/:codeNews')
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
    UserInterceptor,
  )
  @Get()
  findAll() {
    return this.memberService.findAll();
  }

  @Patch('/updateuser')
  update(@Body('condition') condition: Prisma.namecardUpdateArgs) {
    return this.memberService.update(condition);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.memberService.remove(id);
  }
}
