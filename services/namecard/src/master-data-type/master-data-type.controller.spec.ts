import { Test, TestingModule } from '@nestjs/testing';
import { MasterDataTypeController } from './master-data-type.controller';
import { MasterDataTypeService } from './master-data-type.service';

describe('MasterDataTypeController', () => {
  let controller: MasterDataTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterDataTypeController],
      providers: [MasterDataTypeService],
    }).compile();

    controller = module.get<MasterDataTypeController>(MasterDataTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
