export const Button = ({ url, children }) => {

    return (
        <a
            href={url}
            style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold',
            }}
        >
            {children || 'Voir le lien'}
        </a>
    );

};