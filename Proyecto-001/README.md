# Proyecto 001 - Diseño y Documentación de APIs RESTful

## Descripción

API RESTful para gestionar departamentos y empleados. Relación 1 a muchos: un departamento tiene muchos empleados, y cada empleado pertenece a un solo departamento. Documentación generada con Swagger/OpenAPI.

## Estructura del Proyecto

```
Proyecto-001/
├── README.md                           # Este archivo
├── company-api.yaml                   # Especificación OpenAPI/Swagger
└── Collection/                         # Colección Bruno
    ├── bruno.json                      # Configuración de la colección
    ├── departments/                    # Endpoints de departamentos
    │   ├── folder.bru
    │   ├── get-all-departments.bru     # GET /departments
    │   ├── get-department-by-id.bru    # GET /departments/{id}
    │   ├── create-department.bru       # POST /departments
    │   ├── update-department.bru       # PUT /departments/{id}
    │   └── delete-departments.bru      # DELETE /departments/{id}
    ├── employees/                      # Endpoints de empleados
    │   ├── folder.bru
    │   ├── get-all-employees.bru       # GET /employees
    │   ├── get-employee-by-id.bru      # GET /employees/{id}
    │   ├── create-employee.bru         # POST /employees
    │   ├── update-employee.bru         # PUT /employees/{id}
    │   └── delete-employee.bru         # DELETE /employees/{id}
    └── departments-employees/          # Endpoints de relaciones
        ├── folder.bru
        └── get-all-players-by-team-id.bru  # GET /departments/{id}/employees
```

## Endpoints

### Departamentos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/departments` | Obtener todos los departamentos |
| GET | `/departments/{id}` | Obtener un departamento por ID |
| POST | `/departments` | Crear un nuevo departamento |
| PUT | `/departments/{id}` | Actualizar un departamento existente |
| DELETE | `/departments/{id}` | Eliminar un departamento por ID |

### Empleados

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/employees` | Obtener todos los empleados |
| GET | `/employees/{id}` | Obtener un empleado por ID |
| POST | `/employees` | Crear un nuevo empleado |
| PUT | `/employees/{id}` | Actualizar un empleado existente |
| DELETE | `/employees/{id}` | Eliminar un empleado por ID |

### Relaciones

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/departments/{id}/employees` | Obtener los empleados de un departamento |

## Esquemas de Datos

### Department
- **id**: Identificador único del departamento
- **name**: Nombre del departamento
- **location**: Ubicación del departamento

### Employee
- **id**: Identificador único del empleado
- **name**: Nombre del empleado
- **position**: Puesto del empleado
- **departmentId**: ID del departamento al que pertenece
- **email**: Correo electrónico del empleado
- **salary**: Salario del empleado

## Tecnologías Utilizadas

- Bruno: Cliente HTTP para testing de APIs
- OpenAPI 3.0: Especificación de la API
- JSON: Formato de datos

---

Especificación completa: Consulte el archivo `company-api.yaml` para detalles técnicos adicionales.

