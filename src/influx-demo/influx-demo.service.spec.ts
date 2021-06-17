import { Test, TestingModule } from '@nestjs/testing';
import { InfluxDemoService } from './influx-demo.service';

describe('InfluxDemoService', () => {
  let service: InfluxDemoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfluxDemoService],
    }).compile();

    service = module.get<InfluxDemoService>(InfluxDemoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
