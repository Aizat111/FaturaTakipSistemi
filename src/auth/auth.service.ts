import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { TwilioService } from 'nestjs-twilio';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private readonly twilioService: TwilioService,
  ) {}

  async login(userDto: LoginUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByTC(userDto.tc);
    if (candidate) {
      throw new HttpException(
        'Bu tc ile kayıtlı kullanıcı bulunmaktadir',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.create({
      ...userDto,
      password: hashPassword,
    });
    const superadmin = await this.userService.getUserByTC('-1');
    console.log(superadmin?.phone_number);
    console.log(userDto?.phone_number);

    await this.sendSMS(
      superadmin?.phone_number,
      `${userDto.firstname} ${userDto.lastname} kullanıcı sisteme yeni kayıt oldu`,
    );
    // await this.sendSMS(
    //   userDto?.phone_number,
    //   `Sayın  ${userDto.firstname} ${userDto.lastname} Fatura Takip Sistemine hoş geldiniz!`,
    // );
    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = { tc: user.tc, id: user.id, roles: user.roles };
    return {
      data: user,
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: LoginUserDto) {
    const user = await this.userService.getUserByTC(userDto.tc);
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({ message: 'Yanlış tc ya da şifre' });
  }
  async sendSMS(number: string, message: string) {
    return this.twilioService.client.messages.create({
      body: message,
      from: '+12707217792',
      to: '+90'+number,
    });
  }
}
