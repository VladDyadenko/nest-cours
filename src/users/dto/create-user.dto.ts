import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Поштовий адрес' })
  @IsString({ message: 'Повинен бути строкою' })
  @IsEmail({}, { message: 'Некорректний email' })
  readonly email: string;

  @ApiProperty({ example: '1235', description: 'Пароль користувача' })
  @IsString({ message: 'Повинен бути строкою' })
  @Length(4, 16, { message: 'Не меньше 4 і не більше 16' })
  readonly password: string;
}
