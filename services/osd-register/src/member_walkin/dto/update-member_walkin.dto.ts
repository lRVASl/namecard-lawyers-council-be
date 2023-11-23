import { PartialType } from '@nestjs/swagger';
import { CreateMemberWalkinDto } from './create-member_walkin.dto';

export class UpdateMemberWalkinDto extends PartialType(CreateMemberWalkinDto) {}
