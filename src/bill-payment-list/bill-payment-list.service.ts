import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBillPaymentListDto } from './dto/create-bill-payment-list.dto';
import { UpdateBillPaymentListDto } from './dto/update-bill-payment-list.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BillPaymentList } from './entities/bill-payment-list.entity';
import sequelize from 'sequelize';

@Injectable()
export class BillPaymentListService {
  constructor(
    @InjectModel(BillPaymentList)
    private billRepository: typeof BillPaymentList,
  ) {}

  async create(createBillPaymentListDto: CreateBillPaymentListDto) {
    
    const bil = await this.billRepository.create(createBillPaymentListDto);
    return bil;
  }

  async findAll(param: any) {
    if (!param) {
      const bil = await this.billRepository.findAll({ include: { all: true } });
      return bil;
    } else {
      console.log(param);
      const bil = await this.billRepository.findAll({
        where: param,
        include: { all: true },
      });
      return bil;
    }
  }

  async statistics(param: any) {
    if (!param) {
      const bil = await this.billRepository.findAll({ include: { all: true } });
      return bil;
    } else {
      const bil = await this.billRepository.findAll({
        where: param,
        attributes: [
          'product',
          [sequelize.fn('sum', sequelize.col('billAmount')), 'total_amount'],
        ],
        group: ['product'],
        raw: true,
        include: { all: true },

      });
      return bil;
    }
  }
  async graphic(param: any) {
    if (!param) {
      const bil = await this.billRepository.findAll({ include: { all: true } });
      return bil;
    } else {
      const bil = await this.billRepository.findAll({
        where: param,
        attributes: [
          'billIssueDate',
          [sequelize.fn('sum', sequelize.col('billAmount')), 'total_amount'],
        ],
        group: ['billIssueDate'],
        raw: true,
        include: { all: true },

      });
      return bil;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} billPaymentList`;
  }

  async update(id: number, updateBillPaymentListDto: UpdateBillPaymentListDto) {
    const bil = await this.billRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!bil) {
      throw new NotFoundException('Bill bulunmadı!');
    }
    return await bil.update(
      { status: true },
      {
        where: { id },
      },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} billPaymentList`;
  }
}
