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
import { PlayerService } from './player.service';
import { PlayerDto } from './dto/player.dto';

@ApiTags('players')
@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los jugadores' })
  @ApiResponse({ status: 200, description: 'Lista de jugadores obtenida exitosamente' })
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un jugador por ID' })
  @ApiParam({ name: 'id', description: 'ID del jugador', example: 1 })
  @ApiResponse({ status: 200, description: 'Jugador encontrado' })
  @ApiResponse({ status: 404, description: 'Jugador no encontrado' })
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo jugador' })
  @ApiResponse({ status: 201, description: 'Jugador creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  create(@Body() playerDto: PlayerDto) {
    return this.playerService.create(playerDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un jugador existente' })
  @ApiParam({ name: 'id', description: 'ID del jugador', example: 1 })
  @ApiResponse({ status: 200, description: 'Jugador actualizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Jugador no encontrado' })
  update(@Param('id') id: string, @Body() playerDto: PlayerDto) {
    return this.playerService.update(+id, playerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un jugador' })
  @ApiParam({ name: 'id', description: 'ID del jugador', example: 1 })
  @ApiResponse({ status: 200, description: 'Jugador eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Jugador no encontrado' })
  remove(@Param('id') id: string) {
    return this.playerService.remove(+id);
  }
}