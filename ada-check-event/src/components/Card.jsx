import { Button } from './Button';
import { ExpandableText } from './ExpandableText';

export default function Card({ title, cover_url, description, url }) {
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

            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <Button url={url}>Plus de détails</Button>
            </div>
        </div>
    );
}
