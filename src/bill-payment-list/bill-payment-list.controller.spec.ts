import { Test, TestingModule } from '@nestjs/testing';
import { BillPaymentListController } from './bill-payment-list.controller';
import { BillPaymentListService } from './bill-payment-list.service';

describe('BillPaymentListController', () => {
  let controller: BillPaymentListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillPaymentListController],
      providers: [BillPaymentListService],
    }).compile();

    controller = module.get<BillPaymentListController>(BillPaymentListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
