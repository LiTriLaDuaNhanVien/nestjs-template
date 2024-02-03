import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { isString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
