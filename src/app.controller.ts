/*
 * @Author: xuziyong
 * @Date: 2021-06-07 22:56:32
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-07 23:04:59
 * @Description: TODO
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
