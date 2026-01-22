import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerDto } from './dto/player.dto';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @Post()
  create(@Body() playerDto: PlayerDto) {
    return this.playerService.create(playerDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() playerDto: PlayerDto) {
    return this.playerService.update(+id, playerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerService.remove(+id);
  }
}