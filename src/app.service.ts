/*
 * @Author: xuziyong
 * @Date: 2021-06-07 22:56:32
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-07 23:05:28
 * @Description: TODO
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
