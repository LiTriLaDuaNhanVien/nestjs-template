import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './service';
import { helloworldDto } from './dto/helloworld.dto';
import { ApiBody } from '@nestjs/swagger';
import jsonResponse from 'src/utils/json_response';
@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('/hello')
	getHello(): string {
		return this.appService.getHello();
	}

	@Post('/hello_auto_validate')
	@ApiBody({ type: helloworldDto })
	postHelloAutoValidate(@Body() helloworldDto: helloworldDto) {
		return jsonResponse(this.appService.getHello());
	}
}
