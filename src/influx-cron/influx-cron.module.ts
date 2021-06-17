import { Module } from '@nestjs/common';
import { InfluxCronService } from './influx-cron.service';
import { InfluxCronController } from './influx-cron.controller';

@Module({
  controllers: [InfluxCronController],
  providers: [InfluxCronService]
})
export class InfluxCronModule {}
