import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';

@ApiTags('Ролі користувачів')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @ApiOperation({ summary: 'Створення ролі' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() roleDto: CreateRoleDto) {
    return this.rolesService.createRole(roleDto);
  }

  @ApiOperation({ summary: 'Надання ролі користувачу' })
  @ApiResponse({ status: 200, type: Role })
  @Get('/:value')
  getRoleByValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value);
  }
}
