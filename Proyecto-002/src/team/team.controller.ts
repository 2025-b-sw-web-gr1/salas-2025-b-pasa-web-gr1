import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { TeamService } from './team.service';
import { TeamDto } from './dto/team.dto';

@ApiTags('teams')
@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los equipos' })
  @ApiResponse({ status: 200, description: 'Lista de equipos obtenida exitosamente' })
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un equipo por ID' })
  @ApiParam({ name: 'id', description: 'ID del equipo', example: 1 })
  @ApiResponse({ status: 200, description: 'Equipo encontrado' })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo equipo' })
  @ApiResponse({ status: 201, description: 'Equipo creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() teamDto: TeamDto) {
    return this.teamService.create(teamDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un equipo existente' })
  @ApiParam({ name: 'id', description: 'ID del equipo', example: 1 })
  @ApiResponse({ status: 200, description: 'Equipo actualizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  update(@Param('id') id: string, @Body() teamDto: TeamDto) {
    return this.teamService.update(+id, teamDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un equipo' })
  @ApiParam({ name: 'id', description: 'ID del equipo', example: 1 })
  @ApiResponse({ status: 200, description: 'Equipo eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }

  @Get(':id/players')
  @ApiOperation({ summary: 'Obtener todos los jugadores de un equipo' })
  @ApiParam({ name: 'id', description: 'ID del equipo', example: 1 })
  @ApiResponse({ status: 200, description: 'Lista de jugadores obtenida exitosamente' })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  getTeamPlayers(@Param('id') id: string) {
    return this.teamService.getTeamPlayers(+id);
  }
}