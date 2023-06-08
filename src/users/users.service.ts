import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto);

    const role = await this.roleService.getRoleByValue('USER');
    await user.$set('roles', [role.id]);
    user.roles = [role];
    return user;
  }

  async findAll() {
    return await this.userRepository.findAll();
  }
  async getUserByTC(tc: string) {
    const user = await this.userRepository.findOne({
      where: { tc },
      include: { all: true },
    });
    return user;
  }
  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!user) {
      throw new NotFoundException('Kullanıcı bulunmadı!');
    }
    return await user.update(updateUserDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!user) {
      throw new NotFoundException('Kullanıcı bulunmadı!');
    }
    await user.destroy();
    return { success: true, message: 'Başarılı Silindi' };
  }
}
