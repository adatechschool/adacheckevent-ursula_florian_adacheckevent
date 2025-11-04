import { useEffect, useState } from 'react';
import Card from '../components/Card';
import LoadButton from '../components/LoadButton';

export default function Home({ query, trigger }) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const limit = 20;

    async function loadData() {
        setLoading(true);
        try {
            const searchParam = query
                ? `&where=title LIKE "%${encodeURIComponent(query)}%" OR description LIKE "%${encodeURIComponent(query)}%" OR address_street LIKE "%${encodeURIComponent(query)}%"`
                : "";

            const res = await fetch(`https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=${limit}&offset=${offset}${searchParam}`);
            const data = await res.json();

            // Si offset === 0, on remplace la liste ; sinon, on ajoute
            setEvents((prevEvents) =>
                offset === 0 ? data.results : [...prevEvents, ...data.results]
            );

        } catch (error) {
            console.error("Erreur lors de la récupération des données");
        } finally {
            setLoading(false);
        }
    }

    // useEffect pour query : Reset seulement offset (pas events) quand query change
    useEffect(() => {
        setOffset(0);
    }, [query]);

    // useEffect principal : Charge les données seulement quand offset ou trigger change
    useEffect(() => {
        loadData();
    }, [offset, trigger]);

    function loadMoreEvent() {
        setOffset((prevOffset) => prevOffset + limit);
    }

    return (
        <>
            <div>

                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>


                {events.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    events.map((element) => (
                        <Card
                            key={element.id || element.event_id}
                            title={element.title}
                            cover_url={element.cover_url}
                            description={element.description}
                            url={element.url}
                        />
                    ))
                )}

                <LoadButton onClick={loadMoreEvent} loading={loading} />

            </div>
        </>
    );
}
