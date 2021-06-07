/*
 * @Author: xuziyong
 * @Date: 2021-06-07 23:03:58
 * @LastEditors: xuziyong
 * @LastEditTime: 2021-06-08 01:34:14
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
  HttpException,
  HttpStatus,
  UseFilters,
  Bind,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { ClassValidationPipe } from 'src/pipes/validation.pipe';
import { DemoService } from './demo.service';
import { CreateDemoDto } from './dto/create-demo.dto';
import { UpdateDemoDto } from './dto/update-demo.dto';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { JoiValidationPipe, ValidationPipe } from './pipes/validation.pipe';
import { demoSchema } from './schema/demo.schema';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Post()
  create(@Body() createDemoDto: CreateDemoDto) {
    return this.demoService.create(createDemoDto);
  }

  @Get()
  @UseFilters(HttpExceptionFilter)
  findAll() {
    // return this.demoService.findAll();
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('/test/:id')
  findTest(@Param('id', ParseIntPipe) id: number) {
    return this.demoService.findTest(id);
  }

  @Get('/test2/:id')
  findTest2(
    @Param(
      'id',
      // 修改httpStatus
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return id;
  }

  @Get('/test3/:id')
  findTest3(
    @Param(
      'id',
      // 修改httpStatus
      ValidationPipe,
    )
    id: number,
  ) {
    return id;
  }

  @Post('/test4')
  @UsePipes(new JoiValidationPipe(demoSchema))
  findTest4(
    @Body()
    createDemoDto: CreateDemoDto,
  ) {
    return createDemoDto;
  }

  @Post('/test5')
  findTest5(
    @Body(new ClassValidationPipe())
    createDemoDto: CreateDemoDto,
  ) {
    return createDemoDto;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.demoService.findOne(+id);
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemoDto: UpdateDemoDto) {
    return this.demoService.update(+id, updateDemoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demoService.remove(+id);
  }
}
