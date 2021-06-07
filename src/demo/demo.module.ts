/*
 * @Author: xuziyong
 * @Date: 2021-06-07 23:03:58
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-07 23:34:01
 * @Description: TODO
 */
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import {
  LoggerMiddleware,
  LoggerMiddlewareFunc,
} from './mid/logger.middleware ';

@Module({
  controllers: [DemoController],
  providers: [DemoService],
})
export class DemoModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, LoggerMiddlewareFunc)
      // .forRoutes({ path: 'demo', method: RequestMethod.GET });
      .exclude(
        // { path: 'demo', method: RequestMethod.GET },
        { path: 'demo', method: RequestMethod.POST },
        'cats/(.*)',
      )
      .forRoutes(DemoController);
  }
}
