import { Heart } from 'lucide-react';
import { Button } from './Button';
import { ExpandableText } from './ExpandableText';
import { useState } from 'react';
export default function Card({ title, cover_url, description, url ,isFavorite, toggleFavorite, event }) {
    const [message, setMessage] = useState('');  // État pour le message
    const handleToggle =()=>{
        toggleFavorite(event);
        setMessage(isFavorite ? "Retiré des favoris" :"Ajouté aux favoris");
        setTimeout(() => setMessage(''), 2000);  
    }
    return (
        <div
            className="
                flex flex-col justify-between
                border border-gray-300 rounded-lg
                p-4 mb-8 shadow-md min-h-[500px]
                transition-transform duration-300
                hover:scale-[1.02] hover:shadow-lg
            "
        >
            <h2
                className="
                    text-xl font-bold
                    pb-4
                    min-h-[96px]
                    flex items-center justify-center
                    text-center
                "
            >
                {title}
            </h2>

            <img
                src={cover_url}
                alt={title}
                className="max-w-full h-auto mb-4"
            />

            <ExpandableText html={description} maxLength={160} />
            {/* BOUTON POUR AJOUTER OU RETIRER UN FAVORIS  */}
            <div>
                <button onClick={handleToggle}>
                    <Heart  size={16}
                     fill={isFavorite ? 'red' : 'none'}  // Rouge si favori
                    color={isFavorite ? 'red' : 'gray'}/>
                <span >
            {isFavorite ? "Retirer" : "Ajouter"}
          </span>
        </button>
        {message && <p>{message}</p>}
            </div>

            <div className="mt-4 text-center">
                <Button url={url}>Plus de détails</Button>
            </div>
        </div>
    );
}
