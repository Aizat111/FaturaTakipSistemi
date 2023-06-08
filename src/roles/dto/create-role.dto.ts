import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Length } from "class-validator";

export class CreateRoleDto {
    @ApiProperty({example: 'Admın', description: 'Rol unvanı'})
    @IsString({message: 'String olmalı'})
    readonly title: string;
    @ApiProperty({example: 'ADMIN', description: 'Rol valuesu'})
    @IsString({message: 'String olmalı'})
    readonly value: string;
    @ApiProperty({example: 'Açıklama', description: 'Rol Açıklaması'})
    @IsString({message: 'String olmalı'})
    readonly description: string;
}
