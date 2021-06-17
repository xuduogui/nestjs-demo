/*
 * @Author: xuziyong
 * @Date: 2021-06-12 17:01:20
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-13 23:32:59
 * @Description: TODO
 */
import { Injectable, Logger } from '@nestjs/common';
import { influxDBquery } from '../.../../../common/influxdb/query';
import { influxDBhealthCheck } from '../.../../../common/influxdb/health';
import { CreateInfluxDemoDto } from './dto/create-influx-demo.dto';
import { UpdateInfluxDemoDto } from './dto/update-influx-demo.dto';
import {
  fluxQueryMyBucketTemperature,
  fluxQueryMyBucketTemperatureFirst,
  fluxQueryMyIntervalMeasurement,
  fluxQueryMyIntervalMeasurementFirst,
  fluxQueryMyIntervalMeasurementLast,
} from '../.../../../common/influxdb/flux.query';

@Injectable()
export class InfluxDemoService {
  create(createInfluxDemoDto: CreateInfluxDemoDto) {
    return 'This action adds a new influxDemo';
  }

  findAll() {
    return `This action returns all influxDemo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} influxDemo`;
  }

  update(id: number, updateInfluxDemoDto: UpdateInfluxDemoDto) {
    return `This action updates a #${id} influxDemo`;
  }

  remove(id: number) {
    return `This action removes a #${id} influxDemo`;
  }

  async handleCheck(id) {
    const healthStatus = await influxDBhealthCheck();
    Logger.log(healthStatus);
    return healthStatus;
  }

  async queryTest() {
    const queryRes = await influxDBquery(fluxQueryMyBucketTemperature);
    return queryRes;
  }

  async queryLast() {
    const queryRes = await influxDBquery(fluxQueryMyBucketTemperatureFirst);
    return queryRes;
  }

  async queryListMyInterval() {
    const queryRes = await influxDBquery(fluxQueryMyIntervalMeasurement);
    return queryRes;
  }
  async queryListMyIntervalFirst() {
    const queryRes = await influxDBquery(fluxQueryMyIntervalMeasurementFirst);
    return queryRes;
  }
  async queryListMyIntervalLast() {
    const queryRes = await influxDBquery(fluxQueryMyIntervalMeasurementLast);
    return queryRes;
  }
}
