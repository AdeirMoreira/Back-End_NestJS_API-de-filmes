import { Test, TestingModule } from '@nestjs/testing';
import { HashManagerService } from './hash-manager.service';

describe('HashManagerService', () => {
  let service: HashManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HashManagerService],
    }).compile();

    service = module.get<HashManagerService>(HashManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
