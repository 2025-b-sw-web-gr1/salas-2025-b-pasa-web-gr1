# Motores-de-Renderizado-Web

Proyecto de ejemplo que demuestra renderizado del lado del servidor con Spring Boot y Thymeleaf.

## Descripción

Esta aplicación es una página informativa sobre la historia de la organización de esports SK Telecom T1 / T1.
Está construida con Spring Boot y usa Thymeleaf para renderizar plantillas en el servidor. El controlador principal expone las rutas `/` y `/index` que devuelven la plantilla `index.html` ubicada en `src/main/resources/templates`.

La plantilla muestra texto e imágenes estáticas servidas desde `src/main/resources/static` (p. ej. `/img/sktt1.jpg`, `/img/t1.jpg`) y carga la hoja de estilos en `/css/style.css`.

## Tecnologías

- Java 11+ (o la versión configurada en `pom.xml`)
- Spring Boot (Maven)
- Thymeleaf (plantillas)
- Maven wrapper (`mvnw`, `mvnw.cmd`)

## Requisitos

- JDK 11 o superior instalado
- Maven no es obligatorio (se incluye el wrapper), pero puede usarse si se prefiere

## Cómo ejecutar (Windows - PowerShell)

1. Abrir PowerShell en la carpeta `Clase-007/Motores-de-Renderizado-Web`.
2. Ejecutar la aplicación con el wrapper de Maven:

```powershell
.\mvnw.cmd spring-boot:run
```

3. Abrir en el navegador `http://localhost:8080/` (puerto por defecto de Spring Boot).

Alternativa: construir el JAR y ejecutarlo

```powershell
.\mvnw.cmd package
java -jar target\*.jar
```

## Endpoints principales

- `GET /` , `GET /index` -> muestra la página principal renderizada (`index.html`).

No hay API REST adicionales en este ejemplo; la lógica del controlador reside en `HomeController.java`.

## Estructura relevante del proyecto

```
Motores-de-Renderizado-Web/
├─ mvnw, mvnw.cmd, pom.xml
├─ src/
│  ├─ main/
│  │  ├─ java/com/paulstna/.../controller/HomeController.java
│  │  └─ resources/
│  │     ├─ templates/index.html
│  │     └─ static/
│  │        ├─ css/style.css
│  │        └─ img/ (sktt1.jpg, t1.jpg, ...)
```