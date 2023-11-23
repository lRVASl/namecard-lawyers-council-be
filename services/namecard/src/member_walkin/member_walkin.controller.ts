import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MemberWalkinService } from './member_walkin.service';
import { CreateMemberWalkinDto } from './dto/create-member_walkin.dto';
import { UpdateMemberWalkinDto } from './dto/update-member_walkin.dto';

@Controller('api/member-walkin')
export class MemberWalkinController {
  constructor(private readonly memberWalkinService: MemberWalkinService) {}

  @Post()
  create(@Body() createMemberWalkinDto: CreateMemberWalkinDto) {
    return this.memberWalkinService.create(createMemberWalkinDto);
  }

  @Post('upload')
  upload(@Body('data') createMasterDataTypeDto: CreateMemberWalkinDto) {
    return this.memberWalkinService.upload(createMasterDataTypeDto);
  }

  @Get()
  findAll() {
    return this.memberWalkinService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberWalkinService.findOne(+id);
  }
  @Get('event/:eventid')
  findByEvent(@Param('eventid') eventid: string) {
    return this.memberWalkinService.findByEvent(+eventid);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMemberWalkinDto: UpdateMemberWalkinDto,
  ) {
    return this.memberWalkinService.update(+id, updateMemberWalkinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberWalkinService.remove(+id);
  }
}
