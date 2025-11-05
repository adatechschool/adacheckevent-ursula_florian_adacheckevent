import { useState, useEffect } from 'react';  // Hooks React
import Card from '../components/Card';  // Import de Card pour afficher les événements

// Composant pour la page des favoris
export default function Favorites({ toggleFavorite }) {  // Prop : toggleFavorite (fonction pour retirer)
    const [favoriteEvents, setFavoriteEvents] = useState([]);  

    // useEffect : Charge les événements favoris complets depuis localStorage 
    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem('favoriteEvents')) || [];  //recupère les objets
        setFavoriteEvents(storedEvents);  // Met à jour l'état
    }, []);

    // Fonction pour retirer un favori
    const removeFavorite = (event) => {
        toggleFavorite(event);  // Appelle la fonction globale pour mettre à jour l'état et localStorage
        setFavoriteEvents((previous) => previous.filter(e => (e.id || e.event_id) !== (event.id || event.event_id)));  // Met à jour l'état local
    };

    return (
        <div>
            <h1>Mes Favoris</h1>  
            {favoriteEvents.length === 0 ? (  // Condition : si aucun favori
                <p>Aucun favori enregistré.</p>  // Message
            ) : (
                favoriteEvents.map((event) => (  
                    <Card
                        key={event.id || event.event_id}  
                        title={event.title}  
                        cover_url={event.cover_url}  
                        description={event.description} 
                        url={event.url}  
                        isFavorite={true}  // Toujours true ici (c'est un favori)
                        toggleFavorite={() => removeFavorite(event)}  // Fonction pour retirer
                        event={event}  // Objet complet
                    />
                ))
            )}
        </div>
    );
}
