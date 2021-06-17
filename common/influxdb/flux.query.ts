/*
 * @Author: xuziyong
 * @Date: 2021-06-13 15:40:52
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-13 23:23:02
 * @Description: TODO
 */
export const fluxQueryMyBucketTemperature = `from(bucket:"my-bucket") 
    |> range(start: 0) 
    |> filter(fn: (r) => 
      (r._measurement == "airSensors") and 
      (r._field == "co"))
  `;

export const fluxQueryMyBucketTemperatureFirst = `from(bucket:"my-bucket") 
    |> range(start: 0) 
    |> filter(fn: (r) => 
      (r._measurement == "airSensors") and 
      (r._field == "co"))
    |> last()
  `;

export const fluxQueryMyIntervalMeasurement = `from(bucket:"myIntervalBucket") 
  |> range(start: 0) 
`;
export const fluxQueryMyIntervalMeasurementLast = `from(bucket:"myIntervalBucket") 
  |> range(start: 0) 
  |> last()
`;
export const fluxQueryMyIntervalMeasurementFirst = `from(bucket:"myIntervalBucket") 
  |> range(start: 0) 
  |> first()
`;
