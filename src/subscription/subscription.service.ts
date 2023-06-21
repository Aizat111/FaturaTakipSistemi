import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Subscription } from './entities/subscription.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectModel(Subscription)
    private SubscriptionRepository: typeof Subscription,
  ) {}

  async create(createSubscriptionDto: CreateSubscriptionDto) {
    const subscription = await this.SubscriptionRepository.create(
   createSubscriptionDto
    );
    return subscription;
  }
  async getSubscriptionByValue(value: string) {
    const subscription = await this.SubscriptionRepository.findOne({
      where: { value: value?.toUpperCase() },
    });
    return subscription;
  }

  async findAll(user:User) {
    console.log(user)
    if(user.roles[0]?.value==='SUPERADMIN'){
      const subscription = await this.SubscriptionRepository.findAll({
        include: { all: true },
      });
      return subscription;
    }else{
      const subscription = await this.SubscriptionRepository.findAll({
        where: { userId: user.id },
      });
      return subscription;
    }

  }
  async findByUser(id: number) {
    const subscription = await this.SubscriptionRepository.findAll({
      where: { userId: id },
    });
    return subscription;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscription`;
  }

  async update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    const subscription = await this.SubscriptionRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!subscription) {
      throw new NotFoundException('Subscription bulunmadı!');
    }
    return await subscription.update(updateSubscriptionDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    const subscription = await this.SubscriptionRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!subscription) {
      throw new NotFoundException('Subscription bulunmadı!');
    }
    await subscription.destroy();

    return { success: true, message: 'Başarılı Silindi' };
  }
}
