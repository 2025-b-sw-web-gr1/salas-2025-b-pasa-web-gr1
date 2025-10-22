import Navbar from "./NavBar";

function Home() {
  return (
    <div className="container">
      <h1>Juegos Populares</h1>
      <Navbar />
      <p>
        Bienvenido a la lista de juegos más populares del momento. Explora
        nuestros títulos destacados y descubre tus próximos favoritos.
      </p>
    </div>
  );
}

export default Home;
