import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
export class UserExeption {
    static UserExist() {
        throw new BadRequestException("Some error description",{ cause: new Error(), description: 'E001' })
    }
  }