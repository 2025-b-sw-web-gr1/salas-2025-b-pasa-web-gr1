import { Team } from 'src/team/team.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: string;

  @ManyToOne(() => Team, (team) => team.players, {
    onDelete: 'CASCADE',
  })
  team: Team;
}