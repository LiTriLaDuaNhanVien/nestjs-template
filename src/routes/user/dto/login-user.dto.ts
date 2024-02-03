import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LoginUserDto {
    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsString()
    password: string;
}