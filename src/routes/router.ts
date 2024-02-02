import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppModule } from './app/module';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		AppModule,
		UserModule,
		RouterModule.register([
			{
				path: 'dashboard',
				module: AppModule,
			},
			{
				path: 'user',
				module: UserModule,
			},
		]),
	],
})
export class RoutersModule {}
