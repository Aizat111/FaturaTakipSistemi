import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { UserRoles } from './user-role.entity';

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Prımary Key' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'ADMIN', description: 'Rol unvanı' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @ApiProperty({ example: 'ADMIN', description: 'Rol valeusu ' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({ example: 'Admin', description: 'Rol Açıklaması' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
