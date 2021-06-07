/*
 * @Author: xuziyong
 * @Date: 2021-06-07 23:20:04
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-07 23:35:18
 * @Description: TODO
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('LoggerMiddleware...');
    console.log('LoggerMiddleware');
    console.log('LoggerMiddleware');
    next();
  }
}

export function LoggerMiddlewareFunc(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(`LoggerMiddlewareFunc...`);
  console.log('LoggerMiddlewareFunc');
  console.log('LoggerMiddlewareFunc');
  next();
}
