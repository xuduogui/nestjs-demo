/*
 * @Author: xuziyong
 * @Date: 2021-06-12 16:55:09
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-14 00:00:17
 * @Description: TODO
 */
//////////////////////////////////////////
// Shows how to use InfluxDB query API. //
//////////////////////////////////////////

import { FluxTableMetaData } from '@influxdata/influxdb-client';
import { influxDB } from './db';
import { url, token, org } from './env';

export function influxDBquery(fluxQuery) {
  const queryApi = influxDB.getQueryApi(org);
  // const fluxQuery =
  //   'from(bucket:"my-bucket") |> range(start: 0) |> filter(fn: (r) => r._measurement == "temperature")';

  return new Promise((rs, rj) => {
    console.log('*** QUERY ROWS ***');
    // Execute query and receive table metadata and rows.
    // https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/
    const responseArray = [];
    queryApi.queryRows(fluxQuery, {
      next(row: string[], tableMeta: FluxTableMetaData) {
        const rowData = tableMeta.toObject(row);
        responseArray.push(rowData);
      },
      error(error: Error) {
        console.error(error);
        console.log('\nFinished ERROR');
        rj(error);
      },
      complete() {
        console.log('\nFinished SUCCESS');
        rs(responseArray);
      },
    });
  });

  // // Execute query and return the whole result as a string.
  // // Use with caution, it copies the whole stream of results into memory.
  // queryApi
  //   .queryRaw(fluxQuery)
  //   .then(result => {
  //     console.log(result)
  //     console.log('\nQueryRaw SUCCESS')
  //   })
  //   .catch(error => {
  //     console.error(error)
  //     console.log('\nQueryRaw ERROR')
  //   })

  // // Execute query and collect result rows in a Promise.
  // // Use with caution, it copies the whole stream of results into memory.
  // queryApi
  //   .collectRows(fluxQuery /*, you can specify a row mapper as a second arg */)
  //   .then(data => {
  //     data.forEach(x => console.log(JSON.stringify(x)))
  //     console.log('\nCollect ROWS SUCCESS')
  //   })
  //   .catch(error => {
  //     console.error(error)
  //     console.log('\nCollect ROWS ERROR')
  //   })

  // Execute query and receive result lines in annotated csv format
  // queryApi.queryLines(
  //   fluxQuery,
  //   {
  //     error(error: Error) {
  //       console.error(error)
  //       console.log('\nFinished ERROR')
  //     },
  //     next(line: string) {
  //       console.log(line)
  //     },
  //     complete() {
  //       console.log('\nFinished SUCCESS')
  //     },
  //   }
  // )
}
