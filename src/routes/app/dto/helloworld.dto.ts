import { IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class helloworldDto {
  @ApiProperty()
  @IsBoolean()
  readonly helloworld: boolean;
}
