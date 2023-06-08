import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBillPaymentListDto } from './create-bill-payment-list.dto';
import { IsBoolean } from 'class-validator';

export class UpdateBillPaymentListDto extends PartialType(
  CreateBillPaymentListDto,
) {
  @ApiProperty({ example: 'true', description: 'status' })
  @IsBoolean({ message: 'Boleeen olmalı' })
  readonly status: boolean;
}
