import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PlayerDto {
  @ApiProperty({
    example: 'Lionel Messi',
    description: 'Nombre del jugador',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Delantero',
    description: 'Posición del jugador',
  })
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiProperty({
    example: 1,
    description: 'ID del equipo al que pertenece el jugador',
  })
  @IsNumber()
  @IsNotEmpty()
  teamId: number;
}
