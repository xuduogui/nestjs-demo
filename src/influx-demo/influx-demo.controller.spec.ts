import { Test, TestingModule } from '@nestjs/testing';
import { InfluxDemoController } from './influx-demo.controller';
import { InfluxDemoService } from './influx-demo.service';

describe('InfluxDemoController', () => {
  let controller: InfluxDemoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfluxDemoController],
      providers: [InfluxDemoService],
    }).compile();

    controller = module.get<InfluxDemoController>(InfluxDemoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
