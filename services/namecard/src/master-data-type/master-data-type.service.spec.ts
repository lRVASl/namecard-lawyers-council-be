import { Test, TestingModule } from '@nestjs/testing';
import { MasterDataTypeService } from './master-data-type.service';

describe('MasterDataTypeService', () => {
  let service: MasterDataTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterDataTypeService],
    }).compile();

    service = module.get<MasterDataTypeService>(MasterDataTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
