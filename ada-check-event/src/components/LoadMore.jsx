import React from 'react';

export default function LoadMore ({onClick, loading})  {
    return (
        <div>
            <button onClick={onClick} disabled={loading}>
                {loading? "Chargement..." : "Charger plus d'évenement "} </button>
        </div>
    );
};

