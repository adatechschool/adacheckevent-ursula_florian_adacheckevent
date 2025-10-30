
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '../components/Button';
import { cleanHTML } from '../utils/sanitize';
import LoadButton from './LoadButton';

export default function Event ()  {
    const [values, setValues] = useState([]);
    const limit = 5;
    const [offset , setOffset] = useState(0);
    const [loading ,setLoading]= useState(false);
    
        const loadData = async () => {
            setLoading(true);
        const res = await fetch(`https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=${limit}&offset=${offset}`);
        const data = await res.json();

        if (offset === 0){
            setValues(data.results)
        } else{
            setValues((element) => [...element, ...data.results]);
        }
        setLoading(false);
    };
const loadMore= ()=>{
    setOffset((element)=> element + limit)
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
                    <div key={id} style={{ marginBottom: '2rem' }}>
                        <h2>{element.title}</h2>

                        <img
                            src={element.cover_url}
                            alt={element.title}
                            style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem' }}
                        />

                        {/* <ExpandableText html={element.description} maxLength={250} /> */}

                        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                            <Button url={element.url}>Plus de détails</Button>
                        </div>
                    </div>
                ))
            )}
            <LoadButton onClick={loadMore} loading={loading}
            />
        </div>
    );
};

