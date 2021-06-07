/*
 * @Author: xuziyong
 * @Date: 2021-06-07 22:56:32
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-08 01:38:19
 * @Description: TODO
 */
import { Module, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoModule } from './demo/demo.module';
import { HttpExceptionFilterApp } from './filters/http-exception-app.filter';
import { ClassValidationPipe } from './pipes/validation.pipe';

@Module({
  imports: [DemoModule],
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
