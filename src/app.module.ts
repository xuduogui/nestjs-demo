/*
 * @Author: xuziyong
 * @Date: 2021-06-07 22:56:32
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-13 17:16:39
 * @Description: TODO
 */
import { Module, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoModule } from './demo/demo.module';
import { HttpExceptionFilterApp } from '../common/filters/http-exception-app.filter';
import { ClassValidationPipe } from '../common/pipes/validation.pipe';
import { InfluxDemoModule } from './influx-demo/influx-demo.module';
import { InfluxCronModule } from './influx-cron/influx-cron.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    DemoModule,
    InfluxDemoModule,
    InfluxCronModule,
  ],
  controllers: [AppController],
  providers: [
    {
      // 依赖注入的filters的权重小于main中定义的全局
      provide: APP_FILTER,
      useClass: HttpExceptionFilterApp,
    },
    {
      // 依赖注入的pipe的权重小于main中定义的全局
      provide: APP_PIPE,
      // useClass: ClassValidationPipe,
      // 使用内置的ValidationPipe
      useClass: ValidationPipe,
    },
    AppService,
  ],
})
export class AppModule {}
