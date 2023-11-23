import { Test, TestingModule } from '@nestjs/testing';
import { MemberWalkinController } from './member_walkin.controller';
import { MemberWalkinService } from './member_walkin.service';

describe('MemberWalkinController', () => {
  let controller: MemberWalkinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberWalkinController],
      providers: [MemberWalkinService],
    }).compile();

    controller = module.get<MemberWalkinController>(MemberWalkinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
