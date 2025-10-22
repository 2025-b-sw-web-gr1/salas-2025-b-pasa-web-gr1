import juegoImagen from "../assets/juego.png";
import Navbar from "./NavBar";

const juegoDestacado = {
  nombre: "The Legend of Zelda: Breath of the Wild",
  genero: "Aventura/Acción",
  descripcion:
    "Explora un vasto mundo abierto lleno de misterios, rompecabezas y combates épicos mientras ayudas a Link a salvar Hyrule.",
  imagen: juegoImagen,
};

function JuegoDestacado() {
  return (
    <div className="container">
      <h1>{juegoDestacado.nombre}</h1>
      <Navbar />
      <img
        src={juegoDestacado.imagen}
        alt={juegoDestacado.nombre}
      />
      <p>
        <strong>Género:</strong> {juegoDestacado.genero}
      </p>
      <p>
        <strong>Descripción:</strong> {juegoDestacado.descripcion}
      </p>
    </div>
  );
}

export default JuegoDestacado;
