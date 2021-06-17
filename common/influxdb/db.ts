/*
 * @Author: xuziyong
 * @Date: 2021-06-12 16:58:00
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-13 16:15:23
 * @Description: TODO
 */
import { InfluxDB } from '@influxdata/influxdb-client';
import { url, token, influxtimeout } from './env';

export const influxDB = new InfluxDB({ url, token, timeout: influxtimeout });
