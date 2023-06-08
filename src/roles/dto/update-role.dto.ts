import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';
import { IsString } from 'class-validator';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @ApiProperty({ example: 'Admın', description: 'Rol unvanı' })
  @IsString({ message: 'String olmalı' })
  readonly title: string;
  @ApiProperty({ example: 'ADMIN', description: 'Rol valuesu' })
  @IsString({ message: 'String olmalı' })
  readonly value: string;
  @ApiProperty({ example: 'Açıklama', description: 'Rol Açıklaması' })
  @IsString({ message: 'String olmalı' })
  readonly description: string;
}
