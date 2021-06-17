/*
 * @Author: xuziyong
 * @Date: 2021-06-13 17:15:26
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-13 19:13:58
 * @Description: TODO
 */
import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval } from '@nestjs/schedule';
import { influxDBwrite } from '../../common/influxdb/write';

// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second (optional)

@Injectable()
export class InfluxCronService {
  // @Cron('45 * * * * *')
  @Interval('notifications', 1000)
  async handleCron() {
    Logger.debug('/n === === == 数据开始 == === ===');
    const measurement = 'myIntervalMeasurement';
    const bucket = 'myIntervalBucket';
    const rt = await influxDBwrite(bucket, measurement);
    Logger.log(rt);
    Logger.debug('=== === == 结束 == === ===');
  }
}
