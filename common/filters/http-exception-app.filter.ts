/*
 * @Author: xuziyong
 * @Date: 2021-06-07 23:41:49
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-08 00:45:40
 * @Description: TODO
 */

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilterApp implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const message = exception.message;
    const status = exception.getStatus();
    console.log('app HttpExceptionFilterApp');

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      message,
      path: request.url,
    });
  }
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    console.log('Catch Every');

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}

@Catch()
export class AllExceptionsFilterInheritance extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    console.log('AllExceptionsFilterInheritance');

    super.catch(exception, host);
  }
}
