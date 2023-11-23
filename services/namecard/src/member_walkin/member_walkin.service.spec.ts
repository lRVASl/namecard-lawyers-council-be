import { Test, TestingModule } from '@nestjs/testing';
import { MemberWalkinService } from './member_walkin.service';

describe('MemberWalkinService', () => {
  let service: MemberWalkinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemberWalkinService],
    }).compile();

    service = module.get<MemberWalkinService>(MemberWalkinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
