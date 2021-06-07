/*
 * @Author: xuziyong
 * @Date: 2021-06-08 01:09:59
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-08 01:25:54
 * @Description: TODO
 */

import Joi = require('joi');
export const demoSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),

  age: Joi.number().integer().min(1900).max(2013).required(),

  color: Joi.string().required(),
});
