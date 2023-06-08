import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString, Length } from "class-validator";

export class LoginUserDto {
    @ApiProperty({example: '44114298410', description: 'Tc no'})
    @IsString({message: 'String olmalı'})
    @Length(11, 11, {message: 'En az 11 ve en fazla 11 rakam olmalı'})
    readonly tc: string;
    @ApiProperty({example: '12345', description: 'Şifre'})
    @IsString({message: 'String olmalı'})
    @Length(4, 16, {message: 'En az 4 ve en fazla 16 rakam olmalı'})
    readonly password: string;

}