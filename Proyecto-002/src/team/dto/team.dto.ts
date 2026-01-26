import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TeamDto {
  @ApiProperty({
    example: 'Barcelona FC',
    description: 'Nombre del equipo',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'España',
    description: 'País del equipo',
  })
  @IsString()
  @IsNotEmpty()
  country: string;
}
