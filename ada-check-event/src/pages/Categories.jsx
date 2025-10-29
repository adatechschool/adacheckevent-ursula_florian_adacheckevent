import { useParams } from 'react-router-dom';
import detectCategory from '../utils/category';
import Event from '../components/Event';
import { useState } from 'react';
import { useEffect } from 'react';
import { data } from 'react-router-dom';
export default function Categories  ()  {
    const { slug } = useParams(); 
    const [events , setEvents]= useState([]);

    const categoryNames = {
    sport: "Sport & Bien-être",
    culture: "Culture & Spectacles",
    immersif: "Jeux & Expériences immersives",
    loisirs: "Famille & Loisirs",
  };

  const categoryName = categoryNames[slug]; 
    
  useEffect(()=>
    fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=20") 
.then((res)=> res.json)
.then((data)=> 
{
    const filtered = data.results.filter((event)=>{
        const detected = detectCategory(events.title , events.description);
        return detected === detectCategory
    })
},[categoryName])
)
    return (
        <div>
            <h1>{categoryName}</h1>
            <Event events={events}/>
        </div>
    );
};

