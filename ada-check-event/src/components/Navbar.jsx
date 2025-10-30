import { Link } from 'react-router-dom';
import { Home,  Search, Layers2, Heart , X} from 'lucide-react';
import { useState } from 'react';
export default function Navbar() {
  const [searchOpen, setSearchOpen]= useState(false);
  const [categoriesOpen, setCategoriesOpen]= useState(false);
  return (
    <>
     <nav className="navbar">
      <Link to="/"><Home size={24} />
      <span className="text">Accueil</span>
      </Link>
      
<div>
  {!searchOpen ? (
    <button onClick={() => setSearchOpen(true)}>
      <Search size={24} />
      <span>Recherche</span>
    </button>
  ) : (
    <div>
      <Search size={18} />
      <input type="text" placeholder="Rechercher un événement..." />
      <button onClick={() => setSearchOpen(false)}>
        <X size={18} />
      </button>
    </div>
  )}
</div>

<div>
  <button  onClick={()=> setCategoriesOpen(!categoriesOpen)}><Layers2 size={24} />
  <span className="text">Categories</span></button>
  {categoriesOpen &&(
    <ul>
      {/* link va me permetre de naviguer d'une page à une autre sans recharger la page  */}
      <li><Link to="/Categories/culture">Culture & Spectacles</Link></li>
      <li><Link to="/Categories/immersif">Jeux & Expériences immersives</Link></li>
      <li><Link to="/Categories/sport">Sport & Bien-être</Link></li>
      <li><Link to="/Categories/loisirs">Famille & Loisirs</Link></li>
    </ul>
  )}
</div>
  
      <Link to="/Saved"><Heart size={24} />
      <span className="text">favoris</span></Link>
    </nav>
    </>
  );
}