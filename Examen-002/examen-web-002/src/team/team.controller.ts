import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamDto } from './dto/team.dto';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @Post()
  create(@Body() teamDto: TeamDto) {
    return this.teamService.create(teamDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() teamDto: TeamDto) {
    return this.teamService.update(+id, teamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }

  @Get(':id/players')
  getTeamPlayers(@Param('id') id: string) {
    return this.teamService.getTeamPlayers(+id);
  }
}