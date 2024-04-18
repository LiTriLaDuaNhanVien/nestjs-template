import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserException } from 'src/exceptions/users';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
@ApiTags('User')
@Controller()
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('/example_UserExist')
	async example_UserExist() {
		throw UserException.UserExist();
	}

	@Post('/login')
	async login(@Body() loginBody: LoginUserDto) {
		var data = await this.userService.user({
			email: loginBody.email,
		});
		if (data == null) {
			throw UserException.UserNotFound();
		}
		var response =
			(await data).password == loginBody.password
				? true
				: false;
		if (response) {
			return {
				status: 200,
				message: 'Login Success',
				data: data,
			};
		} else {
			throw UserException.NotCorrectPassword();
		}
	}

	@Post('/create')
	@ApiBody({ type: CreateUserDto })
	async create(@Body() createBody: CreateUserDto) {
		return this.userService.createUser({
			name: createBody.name,
			email: createBody.email,
			password: createBody.password,
			role: createBody.role,
		});
	}

	@Get('/list')
	async get_all_user() {
		return this.userService.readUsers();
	}

	@Get('/:id')
	async get_user(@Param('id') id: string) {
		return this.userService.user({
			id: parseInt(id),
		});
	}

	@Post('/update/:id')
	async update_user(
		@Param('id') id: string,
		@Body() updateBody: UpdateUserDto,
	) {
		return this.userService.updateUser({
			where: {
				id: parseInt(id),
			},
			data: {
				name: updateBody.name,
				email: updateBody.email,
				password: updateBody.password,
				role: updateBody.role,
			},
		});
	}

  @Delete('/delete/:id')
  async delete_user(@Param('id') id: string) {
    if (await this.userService.user({ id: parseInt(id) }) == null) {
      throw UserException.UserNotFound();
    }
    return this.userService.deleteUser({
      id: parseInt(id),
    });
  }
}
