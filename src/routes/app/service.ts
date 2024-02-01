import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		return 'Hello World!!';
	}
	postHelloAutoValidate(): string {
		return 'Hello World!!';
	}
}
