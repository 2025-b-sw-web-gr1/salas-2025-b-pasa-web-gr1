import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/juego">Juego Destacado</Link>
    </nav>
  );
}

export default Navbar;
