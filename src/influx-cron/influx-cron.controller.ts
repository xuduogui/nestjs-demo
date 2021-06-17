import { Controller } from '@nestjs/common';
import { InfluxCronService } from './influx-cron.service';

@Controller('influx-cron')
export class InfluxCronController {
  constructor(private readonly influxCronService: InfluxCronService) {}
}
