/*
 * @Author: xuziyong
 * @Date: 2021-06-12 17:01:20
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-12 17:23:44
 * @Description: TODO
 */
import { Module } from '@nestjs/common';
import { InfluxDemoService } from './influx-demo.service';
import { InfluxDemoController } from './influx-demo.controller';

@Module({
  controllers: [InfluxDemoController],
  providers: [InfluxDemoService],
})
export class InfluxDemoModule {}
