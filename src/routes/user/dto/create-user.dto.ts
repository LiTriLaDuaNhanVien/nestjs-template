import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, IsOptional } from 'class-validator';
export class CreateUserDto {
    @ApiProperty()
	@IsString()
    name: string;
    @ApiProperty()
    @IsString()
    email: string;
    @ApiProperty()
    @IsString()
    password: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    role: string;
}
