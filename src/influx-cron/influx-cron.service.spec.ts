import { Test, TestingModule } from '@nestjs/testing';
import { InfluxCronService } from './influx-cron.service';

describe('InfluxCronService', () => {
  let service: InfluxCronService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfluxCronService],
    }).compile();

    service = module.get<InfluxCronService>(InfluxCronService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
