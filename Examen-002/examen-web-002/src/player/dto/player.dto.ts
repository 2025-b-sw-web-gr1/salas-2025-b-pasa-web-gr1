import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class PlayerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsNumber()
  @IsNotEmpty()
  teamId: number;
}