import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

interface SubscriptionCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'subscription' })
export class Subscription extends Model<
  Subscription,
  SubscriptionCreationAttrs
> {
  @ApiProperty({ example: '1', description: 'Prımary Key' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: '13070211', description: 'Fatura takip numarası' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  subscription_no: string;

  @ApiProperty({ example: 'SU', description: 'Hangi fatura olduğunu gösterir' })
  @Column({ type: DataType.STRING, allowNull: false })
  value: string;

  @ApiProperty({
    example: 'Açıklama girilir',
    description: 'Abone numarasının açıklaması girilir',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
