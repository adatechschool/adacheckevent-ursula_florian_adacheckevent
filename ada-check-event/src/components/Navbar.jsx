import { Link } from "react-router-dom";
import { Heart, Layers2, Search, X } from "lucide-react";

export default function Navbar({ query, setQuery, onSearch }) {  // Ajout de onSearch en prop
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Recherche:", query);
        onSearch();  // Appelle onSearch pour incrémenter trigger et déclencher la recherche
    }
    return (
        <nav id="navbar" className="flex items-center justify-between px-4 py-2">
            <Link to="/"
                className="
                    text-xl
                    font-bold
                    text-[#646cff]
                    hover:text-[#535bf2]
                    no-underline
                    "
            >
                AdaCheckEvent
            </Link>
            <div>
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Rechercher un événement"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded"
                    />
                    {query && (
                        <button onClick={() => setQuery("")}
                            className="
                                px-5 py-2
                                rounded-lg
                                border border-transparent
                                bg-[#1a1a1a] text-white
                                text-base font-medium
                                cursor-pointer
                                transition-colors duration-200
                                hover:border-[#646cff]
                                focus:outline focus:outline-4 focus:outline-blue-500
                            "
                        >
                            <X size={12} />
                        </button>
                    )}
                    <button type="submit"
                        className="
                            px-5 py-2       
                            rounded-lg
                            border border-transparent
                            bg-[#1a1a1a] text-white
                            text-base font-medium
                            cursor-pointer
                            transition-colors duration-200
                            hover:border-[#646cff]
                            focus:outline focus:outline-4 focus:outline-blue-500
                        "
                    >
                        <Search size={18} />
                    </button>
                </form>
            </div>
            <div
                className="
                    flex justify-between
                    text-xl
                    font-bold
                    text-[#646cff]
                    hover:text-[#535bf2]
                    no-underline"
            >
                <Link to="/favorites" title="Mes favoris" className="flex px-4">
                    <Heart />
                    <span className="pl-2">Mes favoris</span>
                </Link>
                {/* <Link to="/categories" title="Catégories" className="flex">
                    <Layers2 />
                    <span className="pl-2">Catégories</span>
                </Link> */}
            </div>
        </nav>
    );
}
