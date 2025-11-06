import { useState } from 'react';
import { cleanHTML } from '../utils/sanitize';

export function ExpandableText({ html, maxLength = 200 }) {
    const [expanded, setExpanded] = useState(false);

    const sanitized = cleanHTML(html);
    const isTruncated = sanitized.length > maxLength;
    const shortText = isTruncated ? sanitized.slice(0, maxLength) : sanitized;

    return (
        <div>
            <div
                dangerouslySetInnerHTML={{
                    __html: expanded || !isTruncated ? sanitized : `${shortText}...`,
                }}
            />

            {isTruncated && (
                <button 
                    onClick={() => setExpanded(!expanded)}
                    className="mt-2 bg-transparent border-none text-blue-600 cursor-pointer underline"
                >
                    {expanded ? 'Voir moins' : 'Voir plus'}
                </button>
            )}
        </div>
    );
}
