import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { User } from './users/entities/user.entity';
import { Role } from './roles/entities/role.entity';
import { UserRoles } from './roles/entities/user-role.entity';
import { AuthModule } from './auth/auth.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { Subscription } from './subscription/entities/subscription.entity';
import { BillPaymentListModule } from './bill-payment-list/bill-payment-list.module';
import { BillPaymentList } from './bill-payment-list/entities/bill-payment-list.entity';
import { TwilioModule } from 'nestjs-twilio';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      models: [User, UserRoles, Role, Subscription, BillPaymentList],
      autoLoadModels: true,
      // sync: { force: false, alter: true },
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    SubscriptionModule,
    BillPaymentListModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
