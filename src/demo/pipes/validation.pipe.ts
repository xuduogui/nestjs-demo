/*
 * @Author: xuziyong
 * @Date: 2021-06-08 00:51:54
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-08 01:33:58
 * @Description: 自定义pipe
 */

import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('正在通过验证：ValidationPipe');
    console.log(value, metadata);
    return value;
  }
}

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    console.log('正在通过验证：JoiValidationPipe');
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
