/*
 * @Author: xuziyong
 * @Date: 2021-06-07 22:56:32
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-08 01:34:46
 * @Description: TODO
 */
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  AllExceptionsFilter,
  AllExceptionsFilterInheritance,
  HttpExceptionFilterApp,
} from './filters/http-exception-app.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局过滤器使用
  // app.useGlobalFilters(new AllExceptionsFilter());
  // 全局定义过滤器（自定义继承类）
  // const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new AllExceptionsFilterInheritance(httpAdapter));
  // 全局中间件使用
  // app.use(logger);
  // 全局使用classdto校验
  // app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
