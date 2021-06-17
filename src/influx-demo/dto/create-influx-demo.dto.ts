import { number } from 'joi';

/*
 * @Author: xuziyong
 * @Date: 2021-06-12 17:01:20
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-13 15:17:06
 * @Description: TODO
 */
export class CreateInfluxDemoDto {
  co?: number;
  humidity?: number;
  temperature?: number;
}
