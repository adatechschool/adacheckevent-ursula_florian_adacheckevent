import { Link } from 'react-router-dom';
import { Home,  Search, Layers2, Heart} from 'lucide-react';
export default function Navbar() {
  return (
     <nav className="navbar">
      <Link to="/"><Home size={24} />
      <span className="text">Accueil</span>
      </Link>
      <Link to="/Search"><Search size={24} />
      <span className="text">Recherche</span>
      </Link>
      <Link to="/Categories"><Layers2 size={24} />
      <span className="text">Accueil</span></Link>
      <Link to="/Saved"><Heart size={24} />
      <span className="text">Accueil</span></Link>
    </nav>
  );
}