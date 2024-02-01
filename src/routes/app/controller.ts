import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './service';
import { helloworldDto } from './dto/helloworld.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/hello_auto_validate')
  @ApiBody({ type: helloworldDto })
  postHelloAutoValidate(@Body() helloworldDto: helloworldDto): string {
    console.log(helloworldDto);
    return this.appService.postHelloAutoValidate();
  }
}