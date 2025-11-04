import { useState } from 'react';
import { useEffect } from 'react';
import LoadButton from './LoadButton';
import Card from './Card';
import Navbar from './Navbar';

export default function Event() {
    const [values, setValues] = useState([]);
    const limit = 20;
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
   
    const loadData = async (query="") => {
        setLoading(true);
         const encodedQuery = encodeURIComponent(query.trim());
  const url = `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?where=${encodedQuery ? `search("${encodedQuery}")` : ""}&limit=5`;
        const res = await fetch(url);
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
const handleSearch =(query) =>{
loadData (query)
}
    return (
        <>
        {/* <Navbar onSearch={handleSearch}/> */}
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
        </>
    );
};
