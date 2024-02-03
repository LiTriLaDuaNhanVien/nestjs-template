import { BadRequestException, HttpException, HttpStatus, NotFoundException, UnauthorizedException } from '@nestjs/common';
export class UserExeption {
    static UserExist() {
        throw new BadRequestException("Some error description",{ cause: new Error(), description: 'E001' })
    }
    static UserNotFound() {
        throw new NotFoundException("User Not Found", { cause: new Error(), description: 'E002' })
    }
    static UserNotAuthorized() {
        throw new UnauthorizedException("Not Authorized", { cause: new Error(), description: 'E003' })
    }
    static NotCorrectPassword() {
        throw new BadRequestException("NotCorrectPassword", { cause: new Error(), description: 'E004' })
    }
  }