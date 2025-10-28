import sanitizeHtml from 'sanitize-html';

export function cleanHTML(html) {
    // Génère ['h1', 'h2', ..., 'h6']
    const headingTags = Array.from({ length: 6 }, (_, i) => `h${i + 1}`);

    // Liste complète des balises autorisées
    const allowedTags = [
        'b', 'i', 'em', 'strong', 'br', 'ul', 'li', 'p', 'a',
        ...headingTags,
    ];

    return sanitizeHtml(html, {
        allowedTags,
        allowedAttributes: {
            a: ['href', 'target', 'rel'],
        },
        allowedSchemes: ['http', 'https', 'mailto'],
    });
}