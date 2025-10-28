import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
     <nav className="navbar">
      <Link to="/">Accueil</Link>
      <Link to="/recherche">Recherche</Link>
      <Link to="/favoris">Favoris</Link>
      <Link to="/categories">Catégories</Link>
    </nav>
  );
}