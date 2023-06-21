import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('Abonelik Bilgileri')
@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionService.create(createSubscriptionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/user')
  findByUser(@Param('id') id: string) {
    return this.subscriptionService.findByUser(+id);
  }

  @Roles('SUPERADMIN','USER')
  @UseGuards(RolesGuard)
  @Get()
  findAll(@Req() request: Request) {
    const  user :any  = request;

    return this.subscriptionService.findAll(user?.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':value')
  findByValue(@Param('value') value: string) {
    return this.subscriptionService.getSubscriptionByValue(value);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubscriptionDto: UpdateSubscriptionDto,
  ) {
    return this.subscriptionService.update(+id, updateSubscriptionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionService.remove(+id);
  }
}
