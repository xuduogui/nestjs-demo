import { Test, TestingModule } from '@nestjs/testing';
import { InfluxCronController } from './influx-cron.controller';
import { InfluxCronService } from './influx-cron.service';

describe('InfluxCronController', () => {
  let controller: InfluxCronController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfluxCronController],
      providers: [InfluxCronService],
    }).compile();

    controller = module.get<InfluxCronController>(InfluxCronController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
