import { Test, TestingModule } from '@nestjs/testing';
import { BillPaymentListService } from './bill-payment-list.service';

describe('BillPaymentListService', () => {
  let service: BillPaymentListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillPaymentListService],
    }).compile();

    service = module.get<BillPaymentListService>(BillPaymentListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
