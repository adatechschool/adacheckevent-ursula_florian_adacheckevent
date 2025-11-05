export const Button = ({ url, children }) => {
    return (
        <a
            href={url}
            className="
                inline-block
                px-5 py-2.5
                bg-blue-600
                text-white
                rounded
                no-underline
                font-bold
                hover:bg-blue-700
                transition-colors duration-300
            "
        >
            {children || 'Voir le lien'}
        </a>
    );
};
