# Proyecto 002 - Documentación de Endpoints con Swagger

API RESTful desarrollada con NestJS, TypeORM y SQLite que gestiona equipos (Teams) y jugadores (Players) con una relación 1 a muchos. Documentada con Swagger (OpenAPI).

## Objetivo

Documentar automáticamente los endpoints RESTful implementados en el examen utilizando Swagger (OpenAPI) dentro del mismo proyecto NestJS.

## Tecnologías Utilizadas

- **NestJS** - Framework de Node.js
- **TypeORM** - ORM para TypeScript
- **SQLite** - Base de datos
- **Swagger** - Documentación de API (OpenAPI)
- **Class Validator** - Validación de datos

## Estructura del Proyecto

```
src/
├── app.module.ts           # Módulo principal
├── main.ts                 # Punto de entrada con Swagger
├── team/                   # Módulo de equipos
│   ├── team.entity.ts      # Entidad Team
│   ├── team.service.ts     # Lógica de negocio
│   ├── team.controller.ts  # Controlador REST con decoradores Swagger
│   ├── team.module.ts      # Módulo Team
│   └── dto/
│       └── team.dto.ts     # DTO con @ApiProperty
└── player/                 # Módulo de jugadores
    ├── player.entity.ts    # Entidad Player
    ├── player.service.ts   # Lógica de negocio
    ├── player.controller.ts # Controlador REST con decoradores Swagger
    ├── player.module.ts    # Módulo Player
    └── dto/
        └── player.dto.ts   # DTO con @ApiProperty
```

## Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd Proyecto-002
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar el servidor
```bash
npm run start:dev
```

La aplicación estará disponible en: `http://localhost:3000`

### 4. Acceder a la documentación Swagger
Una vez que el servidor esté corriendo, accede a:

**http://localhost:3000/api**

Desde la interfaz de Swagger puedes:
- Ver todos los endpoints disponibles
- Probar cada endpoint directamente desde el navegador
- Ver los esquemas de datos (DTOs)
- Consultar las respuestas de ejemplo

---

## Configuración de Swagger

### Configuración en `main.ts`

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API de Equipos y Jugadores')
    .setDescription('Documentación de endpoints RESTful')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
```

---

## Decoradores en los Endpoints

### Ejemplo en `team.controller.ts`

```typescript
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  @Get()
  @ApiOperation({ summary: 'Obtener todos los equipos' })
  @ApiResponse({ status: 200, description: 'Lista de equipos' })
  findAll() {
    return this.teamsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo equipo' })
  @ApiResponse({ status: 201, description: 'Equipo creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.create(createTeamDto);
  }
}
```

### Ejemplo en DTOs

**`team.dto.ts`**
```typescript
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({ example: 'Barcelona FC' })
  name: string;

  @ApiProperty({ example: 'España' })
  country: string;
}
```

**`player.dto.ts`**
```typescript
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
  @ApiProperty({ example: 'Lionel Messi' })
  name: string;

  @ApiProperty({ example: 'Delantero' })
  position: string;

  @ApiProperty({ example: 1 })
  teamId: number;
}
```

---

## Endpoints Documentados

### Equipos (Teams)

| Método   | Endpoint              | Descripción                          |
|----------|-----------------------|--------------------------------------|
| GET      | `/teams`              | Obtener todos los equipos            |
| GET      | `/teams/:id`          | Obtener un equipo por ID             |
| POST     | `/teams`              | Crear un nuevo equipo                |
| PUT      | `/teams/:id`          | Actualizar un equipo existente       |
| DELETE   | `/teams/:id`          | Eliminar un equipo                   |
| GET      | `/teams/:id/players`  | Obtener todos los jugadores de un equipo |

### Jugadores (Players)

| Método   | Endpoint              | Descripción                          |
|----------|-----------------------|--------------------------------------|
| GET      | `/players`            | Obtener todos los jugadores          |
| GET      | `/players/:id`        | Obtener un jugador por ID            |
| POST     | `/players`            | Crear un nuevo jugador               |
| PUT      | `/players/:id`        | Actualizar un jugador existente      |
| DELETE   | `/players/:id`        | Eliminar un jugador                  |

---

## Modelo de Datos

### Team (Equipo)
```typescript
{
  id: number;          // ID autogenerado
  name: string;        // Nombre del equipo
  country: string;     // País del equipo
  players: Player[];   // Relación 1:N con jugadores
}
```

### Player (Jugador)
```typescript
{
  id: number;          // ID autogenerado
  name: string;        // Nombre del jugador
  position: string;    // Posición del jugador
  team: Team;          // Relación N:1 con equipo
}
```

---

## Ejemplos con curl

### Teams (Equipos)

#### GET /teams
```bash
curl http://localhost:3000/teams
```

#### GET /teams/:id
```bash
curl http://localhost:3000/teams/1
```

#### POST /teams
```bash
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{"name":"Real Madrid","country":"Spain"}'
```

#### PUT /teams/:id
```bash
curl -X PUT http://localhost:3000/teams/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Real Madrid CF","country":"Spain"}'
```

#### DELETE /teams/:id
```bash
curl -X DELETE http://localhost:3000/teams/1
```

#### GET /teams/:id/players
```bash
curl http://localhost:3000/teams/1/players
```

---

### Players (Jugadores)

#### GET /players
```bash
curl http://localhost:3000/players
```

#### GET /players/:id
```bash
curl http://localhost:3000/players/1
```

#### POST /players
```bash
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{"name":"Vinicius Jr","position":"Forward","teamId":1}'
```

#### PUT /players/:id
```bash
curl -X PUT http://localhost:3000/players/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Vinicius Junior","position":"Left Winger","teamId":1}'
```

#### DELETE /players/:id
```bash
curl -X DELETE http://localhost:3000/players/1
```

---
