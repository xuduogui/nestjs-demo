/*
 * @Author: xuziyong
 * @Date: 2021-06-07 23:03:58
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-08 01:21:10
 * @Description: TODO
 */
import { IsString, IsInt } from 'class-validator';

export class CreateDemoDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}
