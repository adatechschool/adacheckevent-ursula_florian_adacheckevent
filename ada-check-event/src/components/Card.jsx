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
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '2rem',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
            <h2>{title}</h2>

            <img
                src={cover_url}
                alt={title}
                style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem' }}
            />

            <ExpandableText html={description} maxLength={250} />
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

            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <Button url={url}>Plus de détails</Button>
            </div>
        </div>
    );
}
