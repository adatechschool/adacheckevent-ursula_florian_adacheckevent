import { Link } from "react-router-dom";
import { Heart, Layers2, Search, X } from "lucide-react";

export default function Navbar({ query, setQuery, onSearch }) {  // Ajout de onSearch en prop
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Recherche:", query);
        onSearch();  // Appelle onSearch pour incrémenter trigger et déclencher la recherche
    }
    return (
        <nav>
            <Link to="/">AdaCheckEvent</Link>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Rechercher un événement"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {query && (
                        <button onClick={() => setQuery("")}>
                            <X size={12} />
                        </button>
                    )}
                    <button type="submit">
                        <Search size={18} />
                    </button>
                </form>
            </div>
            <div>
                <Link to="/favorites" title="Mes favoris">
                    <Heart />
                    <span>Mes favoris</span>
                </Link>
                <Link to="/categories" title="Catégories">
                    <Layers2 />
                    <span>Catégories</span>
                </Link>
            </div>
        </nav>
    );
}
