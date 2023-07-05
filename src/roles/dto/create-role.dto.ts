import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Назва ролі' })
  readonly value: string;

  @ApiProperty({ example: 'адміністратор', description: 'Опис ролі' })
  readonly description: string;
}
