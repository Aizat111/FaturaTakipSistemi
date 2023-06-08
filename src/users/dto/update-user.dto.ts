import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsString, Length } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 'Aizat', description: 'Ad' })
  @IsString({ message: 'String Olmalı' })
  readonly lastname: string;
  @ApiProperty({ example: 'Esenbekova', description: 'Soyad' })
  @IsString({ message: 'String Olmalı' })
  readonly firstname: string;
  @ApiProperty({ example: 'aizat@mail.com', description: 'E-posta' })
  @IsString({ message: 'String Olmalı' })
  @IsEmail({}, { message: 'Yanlış formatta bit e-posta' })
  readonly email: string;
  @ApiProperty({ example: '12345', description: 'Şifre' })
  @IsString({ message: 'String olmalı' })
  @Length(4, 16, { message: 'En az 4 ve en fazla 16 rakam olmalı' })
  readonly password: string;
  @ApiProperty({ example: '44114298410', description: 'Tc no' })
  @IsString({ message: 'String olmalı' })
  @Length(4, 16, { message: 'En az 4 ve en fazla 16 rakam olmalı' })
  readonly tc: string;
  @ApiProperty({ example: 'Kosova Mah.', description: 'Adres bilgisi' })
  @IsString({ message: 'String olmalı' })
  readonly address: string;

  @ApiProperty({ example: '44114298410', description: 'Tc no' })
  @IsString({ message: 'String olmalı' })
  @Length(4, 16, { message: 'Uygun Telefon Numarasi Giriniz' })
  readonly phone_number: string;
}
