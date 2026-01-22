import { IsString, IsNotEmpty } from 'class-validator';

export class TeamDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}