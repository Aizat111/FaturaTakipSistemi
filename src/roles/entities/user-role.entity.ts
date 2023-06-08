import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { Role } from "./role.entity";
import { User } from "src/users/entities/user.entity";



@Table({tableName: 'user_roles'})
export class UserRoles extends Model<UserRoles> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    
    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

}
