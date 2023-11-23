import { PartialType } from '@nestjs/swagger';
import { CreateMasterDataTypeDto } from './create-master-data-type.dto';

export class UpdateMasterDataTypeDto extends PartialType(CreateMasterDataTypeDto) {}
