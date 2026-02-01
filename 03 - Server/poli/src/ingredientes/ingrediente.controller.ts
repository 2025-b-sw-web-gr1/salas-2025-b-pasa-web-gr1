import { Controller, Get, Post, Patch, Delete, Param, Body, Query, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { IngredientesService } from './ingrediente.service';
import { Ingrediente } from './ingrediente.entity';
import { AdminGuard } from '../guards/auth-admin.guard'; // Ajusta la ruta según tu estructura

@Controller('ingredientes')
export class IngredientesController {
  constructor(private readonly ingredientesService: IngredientesService) {}

  @Post()
  @UseGuards(AdminGuard)
  async crear(@Body() data: Partial<Ingrediente>) {
    try {
      const ingrediente = await this.ingredientesService.crear(data);
      return { statusCode: HttpStatus.CREATED, data: ingrediente };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Patch(':id')
  @UseGuards(AdminGuard)
  async actualizar(@Param('id') id: number, @Body() data: Partial<Ingrediente>) {
    try {
      const ingrediente = await this.ingredientesService.actualizar(id, data);
      if (!ingrediente) {
        throw new HttpException('Ingrediente no encontrado', HttpStatus.NOT_FOUND);
      }
      return { statusCode: HttpStatus.OK, data: ingrediente };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  async eliminar(@Param('id') id: number) {
    try {
      await this.ingredientesService.eliminar(id);
      return { statusCode: HttpStatus.NO_CONTENT };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  @UseGuards(AdminGuard)
  async obtenerUno(@Param('id') id: number) {
    const ingrediente = await this.ingredientesService.obtenerUno(id);
    if (!ingrediente) {
      throw new HttpException('Ingrediente no encontrado', HttpStatus.NOT_FOUND);
    }
    return { statusCode: HttpStatus.OK, data: ingrediente };
  }

  @Get()
  @UseGuards(AdminGuard)
  async obtenerMuchos(@Query() filtros: any) {
    const ingredientes = await this.ingredientesService.obtenerMuchos(filtros);
    return { statusCode: HttpStatus.OK, data: ingredientes };
  }
}