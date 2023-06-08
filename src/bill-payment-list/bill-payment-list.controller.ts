import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BillPaymentListService } from './bill-payment-list.service';
import { CreateBillPaymentListDto } from './dto/create-bill-payment-list.dto';
import { UpdateBillPaymentListDto } from './dto/update-bill-payment-list.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Fatura Bilgiler')
@Controller('bill-payment-list')
export class BillPaymentListController {
  constructor(
    private readonly billPaymentListService: BillPaymentListService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createBillPaymentListDto: CreateBillPaymentListDto) {
    return this.billPaymentListService.create(createBillPaymentListDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() params: any) {
    return this.billPaymentListService.findAll(params);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billPaymentListService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBillPaymentListDto: UpdateBillPaymentListDto,
  ) {
    return this.billPaymentListService.update(+id, updateBillPaymentListDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billPaymentListService.remove(+id);
  }
}
