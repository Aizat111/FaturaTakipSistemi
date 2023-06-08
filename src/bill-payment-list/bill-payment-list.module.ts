import { Module } from '@nestjs/common';
import { BillPaymentListService } from './bill-payment-list.service';
import { BillPaymentListController } from './bill-payment-list.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BillPaymentList } from './entities/bill-payment-list.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [SequelizeModule.forFeature([BillPaymentList]), AuthModule],
  controllers: [BillPaymentListController],
  providers: [BillPaymentListService],
})
export class BillPaymentListModule {}
