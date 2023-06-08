import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  BelongsToMany,
  Table,
  DataType,
  Model,
  HasMany,
} from 'sequelize-typescript';
import { Role } from 'src/roles/entities/role.entity';
import { UserRoles } from 'src/roles/entities/user-role.entity';
import { Subscription } from 'src/subscription/entities/subscription.entity';

interface UserCreationAttrs {
  lastname: string;
  fıstname: string;
  email: string;
  password: string;
  tc: string;
  roles: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Primary Key' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Аizat', description: 'Kullanıcı adı' })
  @Column({ type: DataType.STRING, allowNull: true })
  firstname: string;
  @ApiProperty({ example: 'Esenbekova', description: 'Kullanıcı soyadı' })
  @Column({ type: DataType.STRING, allowNull: true })
  lastname: string;

  @ApiProperty({ example: 'user@mail.ru', description: 'E-posta' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: '12345678', description: 'Şifre' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: '44348389233', description: 'Tc numarası' })
  @Column({ type: DataType.STRING, allowNull: false })
  tc: string;

  @ApiProperty({ example: '+90555 555 55 55', description: 'Telefon numarası' })
  @Column({ type: DataType.STRING, allowNull: false })
  phone_number: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Subscription)
  subscription: Subscription[];

  @ApiProperty({ example: 'Kosova Mah.', description: 'Adres Bilgisi' })
  @Column({ type: DataType.STRING, allowNull: false })
  address: string;
}
