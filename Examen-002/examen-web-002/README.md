# Examen Web 002 - API RESTful con NestJS

API RESTful desarrollada con NestJS, TypeORM y SQLite que gestiona equipos (Teams) y jugadores (Players) con una relación 1 a muchos.

## Tecnologías Utilizadas

- **NestJS** - Framework de Node.js
- **TypeORM** - ORM
- **SQLite** - Base de datos
- **Class Validator** - Validación de datos

## Estructura del Proyecto

```
src/
├── app.module.ts           # Módulo principal
├── main.ts                 # Punto de entrada
├── team/                   # Módulo de equipos
│   ├── team.entity.ts      # Entidad Team
│   ├── team.service.ts     # Lógica de negocio
│   ├── team.controller.ts  # Controlador REST
│   ├── team.module.ts      # Módulo Team
│   └── dto/
│       └── team.dto.ts
└── player/                 # Módulo de jugadores
    ├── player.entity.ts    # Entidad Player
    ├── player.service.ts   # Lógica de negocio
    ├── player.controller.ts # Controlador REST
    ├── player.module.ts    # Módulo Player
    └── dto/
        └── player.dto.ts
```

## Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd examen-web-002
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

## Endpoints Principales

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
Obtener todos los equipos con sus jugadores.
```bash
curl http://localhost:3000/teams
```

#### GET /teams/:id
Obtener un equipo específico por ID.
```bash
curl http://localhost:3000/teams/1
```

#### POST /teams
Crear un nuevo equipo.
```bash
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{"name":"Real Madrid","country":"Spain"}'
```

#### PUT /teams/:id
Actualizar un equipo existente.
```bash
curl -X PUT http://localhost:3000/teams/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Real Madrid CF","country":"Spain"}'
```

#### DELETE /teams/:id
Eliminar un equipo (y sus jugadores en cascada).
```bash
curl -X DELETE http://localhost:3000/teams/1
```

#### GET /teams/:id/players
Obtener todos los jugadores de un equipo específico.
```bash
curl http://localhost:3000/teams/1/players
```

---

### Players (Jugadores)

#### GET /players
Obtener todos los jugadores con información del equipo.
```bash
curl http://localhost:3000/players
```

#### GET /players/:id
Obtener un jugador específico por ID.
```bash
curl http://localhost:3000/players/1
```

#### POST /players
Crear un nuevo jugador.
```bash
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{"name":"Vinicius Jr","position":"Forward","teamId":1}'
```

#### PUT /players/:id
Actualizar un jugador existente.
```bash
curl -X PUT http://localhost:3000/players/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Vinicius Junior","position":"Left Winger","teamId":1}'
```

#### DELETE /players/:id
Eliminar un jugador.
```bash
curl -X DELETE http://localhost:3000/players/1
```

---

