/*
 * @Author: xuziyong
 * @Date: 2021-06-12 17:01:20
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-13 23:33:12
 * @Description: TODO
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { InfluxDemoService } from './influx-demo.service';
import { CreateInfluxDemoDto } from './dto/create-influx-demo.dto';
import { UpdateInfluxDemoDto } from './dto/update-influx-demo.dto';

@Controller('influx-demo')
export class InfluxDemoController {
  constructor(private readonly influxDemoService: InfluxDemoService) {}

  @Post()
  create(@Body() createInfluxDemoDto: CreateInfluxDemoDto) {
    return this.influxDemoService.create(createInfluxDemoDto);
  }

  @Get()
  findAll() {
    return this.influxDemoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.influxDemoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInfluxDemoDto: UpdateInfluxDemoDto,
  ) {
    return this.influxDemoService.update(+id, updateInfluxDemoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.influxDemoService.remove(+id);
  }

  @Get('/health/check')
  healthCheck(@Param('id') id: string) {
    return this.influxDemoService.handleCheck(id);
  }

  @Get('/query/test')
  queryTest() {
    return this.influxDemoService.queryTest();
  }

  @Get('/query/last')
  queryLast() {
    return this.influxDemoService.queryLast();
  }
  @Get('/query/inter')
  queryListMyInterval() {
    return this.influxDemoService.queryListMyInterval();
  }

  @Get('/query/inter/last')
  queryListMyIntervalLast() {
    return this.influxDemoService.queryListMyIntervalLast();
  }
  @Get('/query/inter/first')
  queryListMyIntervalFirst() {
    return this.influxDemoService.queryListMyIntervalFirst();
  }
}
