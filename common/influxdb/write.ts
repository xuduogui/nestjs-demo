/*
 * @Author: xuziyong
 * @Date: 2021-06-13 15:23:50
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-13 23:49:18
 * @Description: TODO
 */
//////////////////////////////////////////////////////////////////////////
// Shows how to control the way of how points are written into InfluxDB //
//////////////////////////////////////////////////////////////////////////
/*
This example shows how to use the client's Write API to control the way of how points 
are sent to InfluxDB server.

It is based on the simpler write.js example, it assumes that you are familiar with it.
The write.js example asynchronously writes points to InfluxDB and assumes that the library
takes care about retries upon failures and optimizes networking to send points in 
batches and on background. This approach is good for sending various metrics from your 
application, but it does not scale well when you need to import bigger amount of data. See 
https://github.com/influxdata/influxdb-client-js/issues/213 for details.
*/

import {
  Point,
  flux,
  fluxDuration,
  DEFAULT_WriteOptions,
} from '@influxdata/influxdb-client';
import { hostname } from 'os';
import { influxDB } from './db';
import { org } from './env';

/* points/lines are batched in order to minimize networking and increase performance */
const flushBatchSize = DEFAULT_WriteOptions.batchSize;
// explains all write options
const writeOptions = {
  /* the maximum points/line to send in a single batch to InfluxDB server */
  batchSize: flushBatchSize + 1, // don't let automatically flush data
  /* default tags to add to every point */
  defaultTags: { location: hostname() },
  /* maximum time in millis to keep points in an unflushed batch, 0 means don't periodically flush */
  flushInterval: 0,
  /* maximum size of the retry buffer - it contains items that could not be sent for the first time */
  maxBufferLines: 30_000,
  /* the count of retries, the delays between retries follow an exponential backoff strategy if there is no Retry-After HTTP header */
  maxRetries: 3,
  /* maximum delay between retries in milliseconds */
  maxRetryDelay: 15000,
  /* minimum delay between retries in milliseconds */
  minRetryDelay: 1000, // minimum delay between retries
  /* a random value of up to retryJitter is added when scheduling next retry */
  retryJitter: 1000,
  // ... or you can customize what to do on write failures when using a writeFailed fn, see the API docs for details
  // writeFailed: function(error, lines, failedAttempts){/** return promise or void */},
};

export async function influxDBwrite(bucket, measurement) {
  console.log('*** WRITE POINTS ***');
  const writeApi = influxDB.getWriteApi(org, bucket, 'ns', writeOptions);
  const point = new Point(measurement)
    .tag('example', 'writeAdvanced.ts')
    .tag('example2', 'addtag')
    .floatField('value', 20 + Math.round(100 * Math.random()) / 10);

  writeApi.writePoint(point);

  try {
    await writeApi.flush();
  } catch (e) {
    return e;
  }

  await writeApi.close();

  return true;

  // // import a bigger count of items
  // for (let i = 0; i < demoCount; i++) {
  //   const point = new Point(measurement)
  //     .tag('example', 'writeAdvanced.ts')
  //     .floatField('value', 20 + Math.round(100 * Math.random()) / 10);
  //   writeApi.writePoint(point);
  //   // control the way of how data are flushed
  //   if ((i + 1) % flushBatchSize === 0) {
  //     console.log(`flush writeApi: chunk #${(i + 1) / flushBatchSize}`);
  //     try {
  //       await writeApi.flush();
  //     } catch (e) {
  //       console.error();
  //     }
  //   }
  // }

  // console.log(
  //   'close writeApi: flush unwritten points, cancel scheduled retries',
  // );
  // await writeApi.close();

  // // print the count of items in the last 5 minutes
  // const start = fluxDuration('-5m');
  // const countQuery = flux`from(bucket: ${bucket})
  //    |> range(start: ${start})
  //    |> filter(fn: (r) => r._measurement == ${demoMeasurement})
  //    |> count(column: "_value")`;
  // const count = await influxDB
  //   .getQueryApi(org)
  //   .collectRows(countQuery, (row, tableMeta) =>
  //     Number.parseInt(row[tableMeta.column('_value').index]),
  //   )
  //   .then((results) => results.reduce((acc, val) => acc + val, 0));
  // console.log(`Size of temperature2 measurement since '${start}': `, count);
}
