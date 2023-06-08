import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSubscriptionDto } from './create-subscription.dto';
import { IsString } from 'class-validator';

export class UpdateSubscriptionDto extends PartialType(CreateSubscriptionDto) {
  @ApiProperty({ example: 'Admın', description: 'Rol unvanı' })
  @IsString({ message: 'String olmalı' })
  readonly subscription_no: string;
  @ApiProperty({ example: 'ADMIN', description: 'Rol valuesu' })
  @IsString({ message: 'String olmalı' })
  readonly value: string;
  @ApiProperty({ example: 'Açıklama', description: 'Rol Açıklaması' })
  @IsString({ message: 'String olmalı' })
  readonly description: string;
}
