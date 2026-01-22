import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';
import { PlayerDto } from './dto/player.dto';
import { Team } from '../team/team.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async findAll(): Promise<Player[]> {
    return this.playerRepository.find({ relations: ['team'] });
  }

  async findOne(id: number): Promise<Player> {
    const player = await this.playerRepository.findOne({
      where: { id },
      relations: ['team'],
    });
    if (!player) {
      throw new NotFoundException(`Player with ID ${id} not found`);
    }
    return player;
  }

  async create(playerDto: PlayerDto): Promise<Player> {
    const team = await this.teamRepository.findOne({
      where: { id: playerDto.teamId },
    });
    if (!team) {
      throw new NotFoundException(
        `Team with ID ${playerDto.teamId} not found`,
      );
    }

    const player = this.playerRepository.create({
      name: playerDto.name,
      position: playerDto.position,
      team: team,
    });

    return this.playerRepository.save(player);
  }

  async update(id: number, updatePlayerDto: PlayerDto): Promise<Player> {
    const player = await this.findOne(id);
    
    if (updatePlayerDto.teamId) {
      const team = await this.teamRepository.findOne({
        where: { id: updatePlayerDto.teamId },
      });
      if (!team) {
        throw new NotFoundException(
          `Team with ID ${updatePlayerDto.teamId} not found`,
        );
      }
      player.team = team;
    }

    player.name = updatePlayerDto.name;
    player.position = updatePlayerDto.position;

    return this.playerRepository.save(player);
  }

  async remove(id: number): Promise<void> {
    const player = await this.findOne(id);
    await this.playerRepository.remove(player);
  }
}