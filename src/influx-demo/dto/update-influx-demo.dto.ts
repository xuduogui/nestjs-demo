import { PartialType } from '@nestjs/mapped-types';
import { CreateInfluxDemoDto } from './create-influx-demo.dto';

export class UpdateInfluxDemoDto extends PartialType(CreateInfluxDemoDto) {}
