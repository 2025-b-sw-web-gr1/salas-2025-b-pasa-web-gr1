import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receta } from './receta.entity';

@Injectable()
export class RecetasService {
  constructor(
    @InjectRepository(Receta)
    private readonly recetaRepository: Repository<Receta>,
  ) {}

  async crear(data: Partial<Receta>): Promise<Receta> {
    const receta = this.recetaRepository.create(data);
    return this.recetaRepository.save(receta);
  }

  async actualizar(id: number, data: Partial<Receta>): Promise<Receta | null> {
    await this.recetaRepository.update(id, data);
    return this.recetaRepository.findOneBy({ id });
  }

  async eliminar(id: number): Promise<void> {
    await this.recetaRepository.delete(id);
  }

  async obtenerUno(id: number): Promise<Receta | null> {
    return this.recetaRepository.findOne({
      where: { id },
      relations: ['ingredientes'], 
    });
  }

  async obtenerMuchos(filtros?: any): Promise<Receta[]> {
    const query = this.recetaRepository.createQueryBuilder('receta')
      .leftJoinAndSelect('receta.ingredientes', 'ingrediente');

    if (filtros?.nombre) {
      query.andWhere('receta.nombre LIKE :nombre', { nombre: `%${filtros.nombre}%` });
    }
    if (filtros?.descripcion) {
      query.orWhere('receta.descripcion LIKE :descripcion', { descripcion: `%${filtros.descripcion}%` });
    }

    return query.getMany();
  }
}