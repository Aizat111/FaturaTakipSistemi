import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { Role } from 'src/roles/entities/role.entity';
import { UserRoles } from 'src/roles/entities/user-role.entity';
import { AuthModule } from 'src/auth/auth.module';
import { RolesModule } from 'src/roles/roles.module';
import { Subscription } from 'src/subscription/entities/subscription.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Subscription]),
    RolesModule,

    forwardRef(() => AuthModule),
  ],
})
export class UsersModule {}
