import { useState } from 'react';
import { useEffect } from 'react';
import LoadButton from './LoadButton';
import Card from './Card';

export default function Event() {
    const [values, setValues] = useState([]);
    const limit = 20;
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false)

    const loadData = async () => {
        setLoading(true);
        const res = await fetch(`https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=${limit}&offset=${offset}`);
        const data = await res.json();
        if (offset === 0) {
            setValues(data.results)
        } else {
            setValues((element) => [...element, ...data.results]);
        }
        setLoading(false)
    };
    const loadMore = () => {
        setOffset((element) => element + limit)
    };
    useEffect(() => {
        loadData()
    }, [offset]);

    return (
        <div>

            {values.length === 0 ? (
                <div>Loading...</div>
            ) : (
                values.map((element, id) => (
                    <Card
                        key={id}
                        title={element.title}
                        cover_url={element.cover_url}
                        description={element.description}
                        url={element.url}
                    />
                ))
            )}

            <LoadButton onClick={loadMore} loading={loading} />

        </div>
    );
};
