import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Поштовий адрес' })
  readonly email: string;

  @ApiProperty({ example: '1235', description: 'Пароль користувача' })
  readonly password: string;
}
