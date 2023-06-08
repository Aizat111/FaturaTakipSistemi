import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { Subscription } from './entities/subscription.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Subscription]),
    UsersModule,
    AuthModule,
  ],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
