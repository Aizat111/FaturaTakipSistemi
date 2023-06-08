import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

interface BillCreationAttrs {
  product: string;
  subscriberNo: string;
  agentCode: string;
  billIssueDate: Date;
  institution: string;
  billAmount: string;
  provisionCode: string;
  subscriberName: string;
  currency: string;
  billDueDate: Date;
  billNo: string;
  channelCode: string;
  commissionAmount: string;
  status: Boolean;
}

@Table({ tableName: 'bill-payment-list' })
export class BillPaymentList extends Model<BillPaymentList, BillCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Prımary Key' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'SU', description: 'Fatura turu' })
  @Column({ type: DataType.STRING, allowNull: false })
  product: string;

  @ApiProperty({ example: '1239921', description: 'subscriberNo' })
  @Column({ type: DataType.STRING, allowNull: false })
  subscriberNo: string;

  @ApiProperty({ example: 'OPENBANK', description: 'agentCode' })
  @Column({ type: DataType.STRING, allowNull: false })
  agentCode: string;

  @ApiProperty({
    example: '2017-10-24T18:42:30.869+03:00',
    description: 'Tarih',
  })
  @Column({ type: DataType.DATE, allowNull: false })
  billIssueDate: string;

  @ApiProperty({ example: 'İSKİ', description: 'İSKİ' })
  @Column({ type: DataType.STRING, allowNull: false })
  institution: string;

  @ApiProperty({ example: '269.81', description: '269.81' })
  @Column({ type: DataType.STRING, allowNull: false })
  billAmount: string;

  @ApiProperty({
    example: '6de613c8-1711-4274-bced-f0e02e929784',
    description: '6de613c8-1711-4274-bced-f0e02e929784',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  provisionCode: string;

  @ApiProperty({ example: 'A*** A******', description: 'A*** A******' })
  @Column({ type: DataType.STRING, allowNull: false })
  subscriberName: string;

  @ApiProperty({ example: 'TL', description: 'TL' })
  @Column({ type: DataType.STRING, allowNull: false })
  currency: string;

  @ApiProperty({
    example: '2017-11-23T18:42:30.869+03:00',
    description: '2017-11-23T18:42:30.869+03:00',
  })
  @Column({ type: DataType.DATE, allowNull: false })
  billDueDate: string;

  @ApiProperty({ example: '1000215', description: '1000215' })
  @Column({ type: DataType.STRING, allowNull: false })
  billNo: string;

  @ApiProperty({ example: 'OPN', description: 'OPN' })
  @Column({ type: DataType.STRING, allowNull: false })
  channelCode: string;

  @ApiProperty({ example: '0', description: '0' })
  @Column({ type: DataType.STRING, allowNull: false })
  commissionAmount: string;

  @ApiProperty({ example: 'true', description: 'true' })
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  status: boolean;
}
