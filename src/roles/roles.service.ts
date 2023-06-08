import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async create(dto: CreateRoleDto) {
    const role = await this.roleRepository.create(dto);
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } });
    return role;
  }

  async findAll() {
    const role = await this.roleRepository.findAll({ include: { all: true } });
    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.roleRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!role) {
      throw new NotFoundException('Role bulunmadı!');
    }
    return await role.update(updateRoleDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    const role = await this.roleRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!role) {
      throw new NotFoundException('Role bulunmadı!');
    }
    await role.destroy();

    return { success: true, message: 'Başarılı Silindi' };
  }
}
