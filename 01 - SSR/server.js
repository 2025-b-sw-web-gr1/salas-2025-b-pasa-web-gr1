const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Carpeta pública
app.use(express.static(path.join(__dirname, 'public')));

// Datos de ejemplo para el juego destacado
const juegoDestacado = {
    nombre: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura/Acción",
    descripcion: "Explora un vasto mundo abierto lleno de misterios, rompecabezas y combates épicos mientras ayudas a Link a salvar Hyrule.",
    imagen: "/images/juego-destacado.png"
};

// Ruta página de inicio
app.get('/', (req, res) => {
    res.render('index', { titulo: 'Juegos Populares' });
});

// Ruta página juego destacado
app.get('/juego', (req, res) => {
    res.render('juego', { juego: juegoDestacado });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
