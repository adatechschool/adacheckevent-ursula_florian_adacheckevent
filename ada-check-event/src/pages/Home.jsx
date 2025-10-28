import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '../components/Button';

export default function Home() {

    const [values, setValues] = useState([]);

    const loadData = async () => {
        const res = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=20");
        const data = await res.json();
        setValues(data.results)
        console.log(data.results[0].title)
    };

    useEffect(() => {
        loadData()
    }, []);

    if (values.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div>
                {values.map((element, id) => {
                    return (
                        <div key={id}>
                            <h2>{element.title}</h2>
                            <p>{element.description}</p>
                            <Button url={element.url}>
                                Plus de détails
                            </Button>
                        </div>
                    )
                })}
            </div>
        </>

    );
};

