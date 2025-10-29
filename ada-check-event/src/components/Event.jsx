
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '../components/Button';
import { ExpandableText } from '../components/ExpandableText';

export default function Event() {
    const [values, setValues] = useState([]);

    const loadData = async () => {
        const res = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=20");
        const data = await res.json();
        setValues(data.results);
        console.log(data.results[0].title)
    };

    useEffect(() => {
        loadData()
    }, []);

    if (values.length === 0) {
        return <div>Loading...</div>
    }
    return (
        <div>
            {values.map((element, id) => (
                <div key={id} style={{ marginBottom: '2rem' }}>
                    <h2>{element.title}</h2>

                    <img
                        src={element.cover_url}
                        alt={element.title}
                        style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem' }}
                    />

                    <ExpandableText html={element.description} maxLength={250} />

                    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                        <Button url={element.url}>Plus de détails</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};


