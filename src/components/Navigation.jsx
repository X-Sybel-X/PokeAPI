import { Link } from 'react-router-dom';
import '../styles/Nav.css';  // Estilos específicos para la barra de navegación

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/pokemonFavorito">Mi Pokémon Favorito</Link>
        </li>
        <li>
          <Link to="/pokemon/100">Ver Pokémon con ID 100</Link>
        </li>
        {/* Agrega más enlaces según lo necesites */}
      </ul>
    </nav>
  );
}

export default Navigation;
