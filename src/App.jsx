import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Bicho } from './assets/pokemon';
import Navigation from '../src/components/Navigation';  // Componente separado para la barra de navegación
import '../src/styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />  {/* Se utiliza el componente Navigation */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/pokemon/77" />} /> {/* Redirige la raíz a Pokémon con ID 77 */}
            <Route path="/pokemonFavorito" element={<Bicho name="Marshadow" />} />
            <Route path="/pokemon" element={<Navigate to="/pokemon/100" />} /> {/* Redirige a 77 si no hay ID */}
            <Route path="/pokemon/:id" element={<Bicho />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
