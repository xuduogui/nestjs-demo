/*
 * @Author: xuziyong
 * @Date: 2021-06-12 16:20:47
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-12 17:26:39
 * @Description: TODO
 */
/*
This example shows how to use management/administration InfluxDB APIs.
All InfluxDB APIs are available through '@influxdata/influxdb-client-apis' package.

See https://v2.docs.influxdata.com/v2.0/api/
*/

import { HealthAPI } from '@influxdata/influxdb-client-apis';
import { influxDB } from './db';

export async function influxDBhealthCheck() {
  console.log('*** HEALTH CHECK ***');

  const healthAPI = new HealthAPI(influxDB);

  try {
    const result = await healthAPI.getHealth();

    console.log(JSON.stringify(result, null, 2));
    console.log('\nHealth:', result.status === 'pass' ? 'OK' : 'NOT OK');
    console.log('\nFinished success');

    return result;
  } catch (error) {
    console.error(error);
    console.log('\nFinished ERROR');
    return error;
  }
}
