/*
 * @Author: xuziyong
 * @Date: 2021-06-12 16:18:28
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-13 16:15:43
 * @Description: TODO
 */
/** InfluxDB v2 URL */
export const url = process.env['INFLUX_URL'] || 'http://localhost:8086';
/** InfluxDB authorization token */
export const token =
  process.env['INFLUX_TOKEN'] || 'my-super-secret-auth-token';
/** Organization within InfluxDB  */
export const org = process.env['INFLUX_ORG'] || 'my-org';
/**InfluxDB bucket used in examples  */
export const bucket = 'my-bucket';
// ONLY onboarding example
/**InfluxDB user  */
export const username = 'my-user';
/**InfluxDB password  */
export const password = 'my-password';
// 链接超时控制
export const influxtimeout = 10 * 1000;
