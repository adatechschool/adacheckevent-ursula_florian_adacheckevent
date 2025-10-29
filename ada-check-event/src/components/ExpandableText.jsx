import { useState } from 'react';
import { cleanHTML } from '../utils/sanitize';

export function ExpandableText({ html, maxLength = 200 }) {
    const [expanded, setExpanded] = useState(false);

    // Nettoie le HTML
    const sanitized = cleanHTML(html);

    // Tronque le texte si nécessaire
    const shortText = sanitized.slice(0, maxLength);

    return (
        <div>
            <div
                dangerouslySetInnerHTML={{
                    __html: expanded ? sanitized : `${shortText}...`,
                }}
            />

            <button
                onClick={() => setExpanded(!expanded)}
                style={{
                    marginTop: '0.5rem',
                    background: 'none',
                    border: 'none',
                    color: '#007bff',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                }}
            >
                {expanded ? 'Voir moins' : 'Voir plus'}
            </button>
        </div>
    );
}