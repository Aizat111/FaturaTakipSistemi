import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsString } from 'class-validator';

export class CreateBillPaymentListDto {
  @ApiProperty({ example: 'SU', description: 'Bil product' })
  @IsString({ message: 'String olmalı' })
  readonly product: string;
  @ApiProperty({ example: '1000216', description: 'Abone Numarasi' })
  @IsString({ message: 'String olmalı' })
  readonly subscriberNo: string;
  @ApiProperty({ example: 'OPENBANK', description: 'agentCode' })
  @IsString({ message: 'String olmalı' })
  readonly agentCode: string;
  @ApiProperty({
    example: '2017-10-24T18:42:30.869+03:00',
    description: 'billIssueDate',
  })
  @IsDate({ message: 'Tarih olmalı' })
  readonly billIssueDate: Date;
  @ApiProperty({ example: 'İSKİ', description: 'institution' })
  @IsString({ message: 'String olmalı' })
  readonly institution: string;
  @ApiProperty({ example: '200', description: 'billAmount' })
  @IsString({ message: 'String olmalı' })
  readonly billAmount: string;
  @ApiProperty({
    example: '6de613c8-1711-4274-bced-f0e02e929784',
    description: 'provisionCode',
  })
  @IsString({ message: 'String olmalı' })
  readonly provisionCode: string;
  @ApiProperty({ example: 'A*** A******', description: 'subscriberName' })
  @IsString({ message: 'String olmalı' })
  readonly subscriberName: string;
  @ApiProperty({ example: 'TL', description: 'currency' })
  @IsString({ message: 'String olmalı' })
  readonly currency: string;
  @ApiProperty({
    example: '2017-11-23T18:42:30.869+03:00',
    description: 'billDueDate',
  })
  @IsDate({ message: 'Tarih olmalı' })
  readonly billDueDate: Date;
  @ApiProperty({ example: '1000215', description: 'billNo' })
  @IsString({ message: 'String olmalı' })
  readonly billNo: string;
  @ApiProperty({ example: 'OPN', description: 'channelCode' })
  @IsString({ message: 'String olmalı' })
  readonly channelCode: string;
  @ApiProperty({ example: '0', description: 'commissionAmount' })
  @IsString({ message: 'String olmalı' })
  readonly commissionAmount: string;
  @ApiProperty({ example: 'true', description: 'status' })
  @IsBoolean({ message: 'Boleen olmalı' })
  readonly status: boolean;
}
